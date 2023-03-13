// JavaScript is Syncronous and Single Threaded !
// The Event Loop is the way to perfom non-blocking I/O operations

console.log("first task");

setTimeout(() => {
    console.log("timeout task");
}, 2000); // two seconds



console.log("final task")