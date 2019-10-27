const readlineSync = require("readline-sync");
const students = Number(readlineSync.question("Students: "));
const teachers = Number(readlineSync.question("Teachers: "));
const bus = Number(readlineSync.question("Bus capacity: "));

let t = (students + teachers);
let b = Math.floor((t/bus) + 1);

console.log("\n" + b + " bus(es) is (are) needed, with " + (t % bus) + " passenger(s) on the last bus.");
