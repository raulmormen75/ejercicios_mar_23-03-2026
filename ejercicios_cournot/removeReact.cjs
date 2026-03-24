const fs = require('fs');
const path = require('path');

const traverseDir = dir => {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
       traverseDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
       let content = fs.readFileSync(fullPath, 'utf8');
       content = content.replace(/import React from 'react';\r?\n/g, '');
       fs.writeFileSync(fullPath, content);
    }
  });
};

traverseDir(path.join(__dirname, 'src'));
console.log('Removed React imports');
