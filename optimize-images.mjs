import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const HOSTS_DIR = path.join(PUBLIC_DIR, 'images', 'hosts');
const BACKUP_DIR = path.join(PUBLIC_DIR, 'original_images_backup');

if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

const extensions = ['.jpg', '.jpeg', '.png', '.tif'];

async function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
            if (item !== 'original_images_backup' && item !== 'node_modules' && item !== '.next') {
                await processDirectory(itemPath);
            }
            continue;
        }

        const ext = path.extname(item).toLowerCase();
        if (!extensions.includes(ext)) continue;

        const baseName = path.basename(item, ext);
        const sanitizedName = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        const outputPath = path.join(dir, `${sanitizedName}.webp`);

        // Skip if optimized version already exists and is newer? 
        // For now, let's just process if it's large or if we want to ensure webp

        console.log(`Optimizing: ${itemPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);

        try {
            let pipeline = sharp(itemPath);
            const metadata = await pipeline.metadata();

            if (metadata.width > 1200) {
                pipeline = pipeline.resize(1200, null, { withoutEnlargement: true });
            }

            await pipeline
                .webp({ quality: 80 })
                .toFile(outputPath);

            const newStats = fs.statSync(outputPath);
            console.log(`  Success! -> ${path.basename(outputPath)} (${(newStats.size / 1024).toFixed(2)} KB)`);

            if (stats.size > 500 * 1024) {
                const relativePath = path.relative(PUBLIC_DIR, itemPath);
                const backupPath = path.join(BACKUP_DIR, relativePath);
                const backupDir = path.dirname(backupPath);

                if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

                fs.renameSync(itemPath, backupPath);
                console.log(`  Moved original to backup: ${relativePath}`);
            }
        } catch (err) {
            console.error(`  Error processing ${item}:`, err.message);
        }
    }
}

async function optimizeImages() {
    await processDirectory(PUBLIC_DIR);
}

optimizeImages().then(() => console.log('Optimization complete!'));
