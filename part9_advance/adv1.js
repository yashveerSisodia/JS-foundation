// asynchronous behaviour of js


console.log("hello world");

setTimeout(()=> {
console.log("delay of 4 sec")
}, 3000);

// runs after every 2 sec
/**
 * setInterval(() => {
    console.log("interval: 2 sec")
}, 2000);
 */


// js is not capable to run the timer fn, but env does, these functions given to env (browser, node .. etc) by eventloop picking from the call stack , they execute and put them in the vip or regular queue. From here eventloop picks up and execute them. 