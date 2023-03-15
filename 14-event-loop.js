// JavaScript is Syncronous and Single Threaded !
// The Event Loop is the way to perfom non-blocking I/O operations.

console.log("first task");

// this function is async, so it will be offloaded
setTimeout(() => {
    console.log("timeout task");
}, 0); // 0 milliseconds

console.log("intermediate task")

// WARN: kill the process with CTRL-C
setInterval(() => {
    console.log("interval task");
}, 1000);

console.log("final task");