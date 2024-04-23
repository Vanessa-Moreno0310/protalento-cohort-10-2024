// const cowsay = require("cowsay");
// const yodasay = require("yodasay");
import cowsay from "cowsay";
import yodasay from "yodasay";

console.log(cowsay.say({
    text : "I'm a moooodule of Protalento",
    e : "&O",
    T : "U "
}));

// console.log(yodasay.say({ text: "Of Protalento a module I am!"}));

console.log(yodasay.say({ text: "A Jedi Developer you will become!"}));

function firstFunction() {
    console.log("First function called!");
    secondFunction();
}

function secondFunction() {
    console.log("Second function called!");
}

const thirdFunction = function() {
    console.log("Third function called!");
}

function asyncTimeoutFunction() {
    setTimeout(function() {
        console.log("Within the async function! :O");
    }, 3000);
}

firstFunction();
asyncTimeoutFunction();
setTimeout(function() {
    console.log("SetTimeout call! :O");
}, 3000);
// asyncTimeoutFunction();
thirdFunction();