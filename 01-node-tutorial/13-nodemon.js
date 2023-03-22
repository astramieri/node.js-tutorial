// official site: https://www.npmjs.com/
// npm = node package manager
// npm --version
// npm --v 

// install locally inside particular project
// npm install <package>
// npm i <package>

// install globally for every project
// npm install -g <package>

// initialize a package
// package.json manifest file
// npm init (step by step, enter to skip)

// semantic version
// 1.0.0  (major.minor.patch)

// Love this explanation
// https://stackoverflow.com/questions/38006384/why-the-name-underscore-or-lodash

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log("testing nodemon functionalities");

