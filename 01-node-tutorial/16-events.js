const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// trigger the event before register it (WRONG!)
customEmitter.emit("response");

// register/subscrive the event
customEmitter.on("response", () => {
  console.log("data received");
});
customEmitter.on("response", (name, id) => {
  console.log("some other logic here", `name is ${name}`);
});

// trigger the event
customEmitter.emit("response", "john", 34);
