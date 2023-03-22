

// regular way 
//function regular (a, b, c) {}

// arrow way 
//const arrow = (a, b, c ) => {}

// CALLBACK = calling a function inside another function

console.log("I hate ");

setTimeout(() => {
    console.log("all of them!");
}, 3000); // 1000 = 1 secs

console.log("call centers");

function step_1 (call_two) {
    console.log("step 1");
    call_two();
}

function step_2 () {
    console.log("step 2");
}

step_1(step_2);

