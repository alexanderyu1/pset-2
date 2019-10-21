const readlineSync = require("readline-sync");

const answer = readlineSync.question("What is your name? ");
console.log("Hello, " + answer + "!");
