const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, 'src-bundle.txt');
const content = fs.readFileSync(bundlePath, 'utf8');

// The file might have carriage returns
const lines = content.split(/\r?\n/);

let currentFile = null;
let currentContent = [];

for (const line of lines) {
  const match = line.match(/^===== FILE: (.+) =====$/);
  if (match) {
    if (currentFile) {
      const filePath = path.join(__dirname, currentFile);
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, currentContent.join('\n'));
      console.log('Created:', currentFile);
    }
    currentFile = match[1].trim();
    currentContent = [];
  } else {
    if (currentFile !== null) {
      currentContent.push(line);
    }
  }
}

if (currentFile) {
  const filePath = path.join(__dirname, currentFile);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, currentContent.join('\n'));
  console.log('Created:', currentFile);
}
