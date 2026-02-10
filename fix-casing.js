const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const files = [
    'public/images/Allstate.jpg',
    'public/images/Amrut.jpg',
    'public/images/Angadi.jpg',
    'public/images/Apex.jpg',
    'public/images/Benz.jpg',
    'public/images/Cortland.jpg',
    'public/images/Hendrick.jpg',
    'public/images/Hotstar.jpg',
    'public/images/Jaguar.jpg',
    'public/images/hosts/idhar-udhar-ki-baatein.jpeg',
    'public/images/hosts/Mana Muchatlu.jpg'
];

files.forEach(file => {
    try {
        const dir = path.dirname(file);
        const name = path.basename(file);
        let base = name;
        let ext = path.extname(name).toLowerCase();
        while (path.extname(base)) base = path.basename(base, path.extname(base));

        // Special case for idhar-udhar
        if (base === 'idhar-udhar-ki-baatein' && ext === '.jpeg') ext = '.jpg';

        const cleanBase = base.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const target = path.join(dir, cleanBase + ext).replace(/\\/g, '/');

        if (file !== target || file.toLowerCase() === target.toLowerCase()) {
            console.log(`Moving ${file} to ${target}`);
            const temp = target + '.tmp';
            execSync(`git mv "${file}" "${temp}"`);
            execSync(`git mv "${temp}" "${target}"`);
        }
    } catch (e) {
        console.error(`Error moving ${file}: ${e.message}`);
    }
});
