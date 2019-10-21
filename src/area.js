const readlineSync = require("readline-sync");

let x = length;
let y = width;
let z = x * y;

const length = readlineSync.question("length: ");
const width = readlineSync.question("width: ");
console.log("A(n) " + width + "-by-" + length "-inch sheet of paper has an area of " + z " square millimiter(s).");
