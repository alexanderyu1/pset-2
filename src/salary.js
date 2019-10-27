const readlineSync = require("readline-sync");
const annual = readlineSync.question("Annual Salary: ");

const k = 0.07;
const f = 0.157;
const s = 0.0447;
const o = 0.062;
const m = 0.0145;

const salary = annual * (1-k);
let t = f + s + o + m;
let k = (1-t) * salary;

let z = k / 24 ;

let r = Math.round (z);
z = z.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("Your take-home pay each check will be $" + z + ".")
