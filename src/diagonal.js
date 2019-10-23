const readlineSync = require("readline-sync");
const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");

let x = length;
let y = width;
let c = Math.sqrt(x*x + y*y);
let r = Math.round (c);
c = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("A(n) " + y + "-by-" + x + "-inch sheet of paper has a diagonal of " + c + " inch(es).");
