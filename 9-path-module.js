const p = require("path");
console.log(p.sep);

const fp = p.join("/content", "/subfolder", "text.txt"); // merges the path
console.log(fp);

const base = p.basename(fp);
console.log(base); // shows the final path name in given  flow of path

const absolute = p.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute); // provides absolutes path right from root or c
