const path = require("path");

const extension = path.extname("file.txt");
console.log(extension);

console.log(path.extname("index.html"));
console.log(path.extname("index.coffee.md"));
console.log(path.extname("index."));
console.log(path.extname("index"));
console.log(path.extname(".index"));


// Join path segments
const fullPath = path.join('/users', 'docs', 'file.txt');
console.log(fullPath); // Output depends on OS

// Handle relative paths and navigation
console.log(path.join('/users', '../system', './logs', 'file.txt'));

// Handle multiple slashes
console.log(path.join('users', '//docs', 'file.txt')); // Normalizes slashes