import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filesToOptimize = [
  'public/images/hosts/Prachi.png',
  'public/images/hosts/hello-vaishnavi.jpeg',
  'public/images/hosts/nirvana-nights.png',
  'public/images/hosts/Aaj Ki Shaam-jyoti kae naam.png',
  'public/images/hosts/triangle-tunes.jpeg',
  'public/images/hosts/bollywood-bliss.jpeg',
  'public/images/hosts/zara-muskurao.jpeg',
  'public/images/hosts/dil-se-desi.jpeg',
  'public/images/events/bhajan-clubbing-janmashtami-2026.png',
  'public/images/events/iafv-garba-dandiya-night-2026.png',
  'public/images/events/iafv-garba-dandiya-night-2026.jpg',
  'public/images/events/rhythm-raas-garba-2026.png',
  'public/images/events/rhythm-raas-garba-2026.jpg',
  'public/images/events/iafv-diwali-fest-2026.jpg',
  'public/images/ganesh-chaturthi.jpg',
  'public/images/rtv/rtv-news-poster.jpg'
];

async function run() {
  for (const relPath of filesToOptimize) {
    const fullPath = path.resolve(relPath);
    if (!fs.existsSync(fullPath)) continue;

    const statsBefore = fs.statSync(fullPath);
    const sizeMBBefore = (statsBefore.size / (1024 * 1024)).toFixed(2);
    const ext = path.extname(fullPath).toLowerCase();
    const tempOutput = fullPath + '.tmp';

    try {
      let pipeline = sharp(fullPath).resize(800, null, { withoutEnlargement: true });

      if (ext === '.png') {
        pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
      } else {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true });
      }

      await pipeline.toFile(tempOutput);
      fs.unlinkSync(fullPath);
      fs.renameSync(tempOutput, fullPath);

      const statsAfter = fs.statSync(fullPath);
      const sizeKBAfter = (statsAfter.size / 1024).toFixed(1);
      console.log(`Optimized ${relPath}: ${sizeMBBefore}MB -> ${sizeKBAfter}KB`);
    } catch (err) {
      if (fs.existsSync(tempOutput)) fs.unlinkSync(tempOutput);
      console.error(`Failed ${relPath}:`, err.message);
    }
  }
}

run();
