const readlineSync = require("readline-sync");
const hourlywage = readlineSync.question("Hourly Wage: ");
const monday = readlineSync.question("\nMonday: ");
const tuesday = readlineSync.question("Tuesday: ");
const wednesday = readlineSync.question("Wednesday: ");
const thursday = readlineSync.question("Thursday: ");
const friday = readlineSync.question("Friday: ");
const saturday = readlineSync.question("Saturday: ");
const sunday = readlineSync.question("Sunday: ");

let a = ((Number(monday)) + (Number(tuesday)) + (Number(wednesday)) + (Number(thursday)) + (Number(friday)) + (Number(saturday)) + (Number(sunday)));

let c = hourlywage * a

let r = Math.round (c);
c = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("\nYou'll make $" + c + " this week.");
