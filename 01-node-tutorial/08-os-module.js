const os = require('os');   // operating system

// info about the current user
const user = os.userInfo();

console.log(user);

// system uptime in second
console.log(`The system uptime is ${os.uptime()} seconds`);

let currentOS = {
    type : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem(),
};

console.log(currentOS);