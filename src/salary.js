const readlineSync = require("readline-sync");
const annual = readlineSync.question("Annual Salary: ");

let a = (Number(annual*0.07));
let c = (Number(annual *0.157));
let d = annual - c
let e = (Number(d*0.0447));
let f = d-e
let g = (Number(f*0.062));
let h = f-g
let i = (Number(h*0.0145));
let j = h-i
let k = j-a

let z = k / 24 ;

let r = Math.round (z);
z = z.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("Your take-home pay each check will be $" + z + ".")
