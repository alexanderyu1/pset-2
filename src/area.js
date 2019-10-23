const readlineSync = require("readline-sync");
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const Conversion = 25.4;

let x = length;
let y = width;
let a = x*Conversion;
let b = y*Conversion;
let c = a*b;
let r = Math.round (c);
c = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("A(n) " + y + "-by-" + x + "-inch sheet of paper has an area of " + c + " square millimiter(s).");
