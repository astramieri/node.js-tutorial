// JavaScript is Syncronous and Single Threaded !
// The Event Loop is the way to perfom non-blocking I/O operations

console.log("first task");

setTimeout(() => {
    console.log("timeout task");
}, 5000);

console.log("final task")