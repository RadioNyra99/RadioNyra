const fs = require('fs');
const path = require('path');

const img1Path = "C:/Users/VADLAPUDI PRANAB/.gemini/antigravity/brain/cff0af9b-4c22-4b92-9216-359e1ef6c9d1/.user_uploaded/media_1788885317141.jpg";
const img2Path = "C:/Users/VADLAPUDI PRANAB/.gemini/antigravity/brain/cff0af9b-4c22-4b92-9216-359e1ef6c9d1/.user_uploaded/media_1788885331498.jpg";

const dirs = [
    path.join(__dirname, 'public', 'images', 'events'),
    path.join(__dirname, 'out', 'images', 'events')
];

dirs.forEach(destDir => {
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    console.log(`Copying images to ${destDir}...`);
    fs.copyFileSync(img1Path, path.join(destDir, 'rhythm-raas-garba-2026.jpg'));
    fs.copyFileSync(img1Path, path.join(destDir, 'rhythm-raas-garba-2026.png'));

    fs.copyFileSync(img2Path, path.join(destDir, 'iafv-garba-dandiya-night-2026.jpg'));
    fs.copyFileSync(img2Path, path.join(destDir, 'iafv-garba-dandiya-night-2026.png'));
});

console.log("All event images updated in public and out!");
