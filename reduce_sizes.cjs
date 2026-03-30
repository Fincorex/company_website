const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/HomePC/Documents/HTTRACKER/Fincorex-static/tailwind.saasable.io/fincorex-react-app/src';

function walk(directory) {
    let results = [];
    const list = fs.readdirSync(directory);
    list.forEach(file => {
        file = path.join(directory, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(dir);

const replacements = [
    { regex: /rounded-\[40px\]/g, replacement: 'rounded-2xl' },
    { regex: /rounded-\[32px\]/g, replacement: 'rounded-2xl' },
    { regex: /rounded-3xl/g, replacement: 'rounded-2xl' },
    { regex: /\bp-12\b/g, replacement: 'p-8' },
    { regex: /\bp-10\b/g, replacement: 'p-6' },
    { regex: /\bp-8\b/g, replacement: 'p-6' },
    { regex: /\bpx-10\b/g, replacement: 'px-6' },
    { regex: /\bpy-10\b/g, replacement: 'py-6' },
    { regex: /\bpx-12\b/g, replacement: 'px-8' },
    { regex: /\bpy-12\b/g, replacement: 'py-8' },
    { regex: /\bgap-12\b/g, replacement: 'gap-8' },
    { regex: /\bgap-10\b/g, replacement: 'gap-8' },
    { regex: /\bgap-8\b/g, replacement: 'gap-6' },
    { regex: /\bgap-6\b/g, replacement: 'gap-4' },
    { regex: /\btext-5xl\b/g, replacement: 'text-4xl' },
    { regex: /\btext-4xl\b/g, replacement: 'text-3xl' },
    { regex: /\btext-6xl\b/g, replacement: 'text-5xl' },
    { regex: /\btext-7xl\b/g, replacement: 'text-6xl' },
    { regex: /\bmb-12\b/g, replacement: 'mb-8' },
    { regex: /\bmb-10\b/g, replacement: 'mb-8' },
    { regex: /\bmt-12\b/g, replacement: 'mt-8' },
    { regex: /\bmt-10\b/g, replacement: 'mt-8' },
    { regex: /\bpt-24\b/g, replacement: 'pt-16' },
    { regex: /\bpb-24\b/g, replacement: 'pb-16' },
    { regex: /\bpt-20\b/g, replacement: 'pt-12' },
    { regex: /\bpb-20\b/g, replacement: 'pb-12' },
    { regex: /\bpy-20\b/g, replacement: 'py-12' },
    { regex: /\bpy-24\b/g, replacement: 'py-16' },
];

let changedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedCount++;
        console.log(`Updated ${path.basename(file)}`);
    }
});

console.log(`Total files updated: ${changedCount}`);
