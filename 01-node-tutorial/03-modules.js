// NodeJs use CommonJs under the hood. Every file is module (by default)

const names = require('./04-names');        // always use . for local module
const sayHi = require('./05-utils');        // always use . for local module
const datas = require('./06-alternative');   

// WARN: if a function is called in the module, the function will run when invoked
// REMING: when you import a module, you actually invoke it
const mind = require('./07-mind-grenade');   // mind grenate

console.log(names);

sayHi("Angelo");
sayHi(names.peter);

console.log(datas.singlePerson);
