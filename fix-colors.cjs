const fs = require('fs');
let css = fs.readFileSync('src/styles.css', 'utf8');

// replace variables: --xxx: oklch(a b c); -> --xxx: a b c;
// careful with --border
css = css.replace(/--border: oklch\(([^)]+) \/ 0\.4\);/, '--border: $1;');
css = css.replace(/--([a-zA-Z-]+): oklch\(([^)]+)\);/g, '--$1: $2;');

// fix the border color in base
css = css.replace('border-color: var(--border)', 'border-color: oklch(var(--border) / 0.4)');

fs.writeFileSync('src/styles.css', css);

let tw = fs.readFileSync('tailwind.config.js', 'utf8');

// for each color, replace 'var(--color)' with 'oklch(var(--color) / <alpha-value>)'
tw = tw.replace(/"var\(--([a-zA-Z-]+)\)"/g, '"oklch(var(--$1) / <alpha-value>)"');

fs.writeFileSync('tailwind.config.js', tw);
console.log('Fixed Tailwind colors globally!');
