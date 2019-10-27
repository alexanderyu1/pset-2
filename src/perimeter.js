const readlineSync = require("readline-sync");
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const Conversion = 2.54;

let x = length;
let y = width;
let a = x*Conversion;
let b = y*Conversion;
let c = (2*a)+(2*b);

let r = Math.round (c);
c = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("A(n) " + y + "-by-" + x + "-inch sheet of paper has a perimeter of " + c + " centimeter(s).");
