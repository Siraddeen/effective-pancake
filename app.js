// npm — global command, comes with node
// npm ——version
// local dependency - use it only in this particular project

// npm i <packageName>
1;
// global dependency — use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package. j son in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init —y (everything default)

const a = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = a.flattenDeep(items);

console.log(newItems);
