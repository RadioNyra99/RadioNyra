const Jimp = require('jimp');
const path = require('path');
const fs = require('fs');

const inputDir = 'e:/Nyra/public/OLD Images';
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.tif'));

async function convert() {
    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = inputPath.replace('.tif', '.jpg');
        console.log(`Converting ${file}...`);
        try {
            const image = await Jimp.read(inputPath);
            await image.quality(80).writeAsync(outputPath);
            console.log(`Saved ${outputPath}`);
        } catch (err) {
            console.error(`Failed to convert ${file}:`, err);
        }
    }
}

convert();
