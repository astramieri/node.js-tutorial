// NodeJs use CommonJs under the hood. Every file is module (by default)
// Module 

const names = require('./04-names'); // always use . for local module
const sayHi = require('./05-utils'); // always use . for local module

console.log(names);

sayHi("Angelo");
sayHi(names.peter);
