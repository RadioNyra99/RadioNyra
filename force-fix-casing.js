const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const gitFiles = execSync('git ls-files public/images').toString().split('\n').filter(Boolean);

gitFiles.forEach(file => {
    const dir = path.dirname(file);
    const name = path.basename(file);
    let base = path.parse(file).name;
    let ext = path.parse(file).ext.toLowerCase();

    // Fix specific reported host image extension
    if (base === 'idhar-udhar-ki-baatein' && ext === '.jpeg') ext = '.jpg';

    // Standardize naming
    const cleanBase = base.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const target = path.join(dir, cleanBase + ext).replace(/\\/g, '/');

    if (file !== target) {
        console.log(`Fixing casing in Git: ${file} -> ${target}`);
        try {
            const temp = target + '.tmp_rename';
            execSync(`git mv "${file}" "${temp}"`);
            execSync(`git mv "${temp}" "${target}"`);
        } catch (e) {
            console.error(`Failed to move ${file}: ${e.message}`);
        }
    }
});
