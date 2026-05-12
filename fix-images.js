const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'images');
const files = fs.readdirSync(imgDir);

files.forEach(file => {
    const fullPath = path.join(imgDir, file);
    if (fs.lstatSync(fullPath).isDirectory()) return;

    const buffer = fs.readFileSync(fullPath, { encoding: null });
    let ext = '';

    // Check magic numbers
    if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
        ext = '.png';
    } else if (buffer[0] === 0x00 && buffer[1] === 0x00 && buffer[2] === 0x01 && buffer[3] === 0x00) {
        ext = '.ico';
    } else if (buffer[0] === 0xFF && buffer[1] === 0xD8) {
        ext = '.jpg';
    } else {
        ext = path.extname(file).toLowerCase();
        if (!ext) ext = '.jpg'; // Fallback
    }

    // New name: lowercase, no spaces, kebab-case
    // Strip all current extensions first
    let base = file;
    while (path.extname(base)) {
        base = path.basename(base, path.extname(base));
    }

    let name = base
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    if (!name) name = 'image-' + Math.random().toString(36).substring(7);

    const newName = name + ext;
    const newPath = path.join(imgDir, newName);

    if (file !== newName) {
        console.log(`Renaming: ${file} -> ${newName}`);
        const tempPath = path.join(imgDir, 'temp-' + Date.now() + '-' + file);
        fs.renameSync(fullPath, tempPath);
        if (fs.existsSync(newPath)) {
            // If the target already exists (e.g. from another file), we might merge or overwrite
            // For now, just rename.
            fs.renameSync(tempPath, newPath);
        } else {
            fs.renameSync(tempPath, newPath);
        }
    }
});
