const readlineSync = require("readline-sync");
const homework1 = readlineSync.question("Enter three homework grades.\n" );
const homework2 = readlineSync.question("" );
const homework3 = readlineSync.question("" );

const quizzes1 = readlineSync.question("Enter three quiz grades.\n" );
const quizzes2 = readlineSync.question("" );
const quizzes3 = readlineSync.question("" );

const tests1 = readlineSync.question("Enter three test grades.\n" );
const tests2 = readlineSync.question("" );
const tests3 = readlineSync.question("" );

let h = homework1 + homework2 + homework3;
let q = quizzes1 + quizzes2 + quizzes3;
let t = tests1 + tests2 + tests3;
let c = ((0.15*h) + (0.35*q) + (0.5*t)) / 9 ;

console.log("Your marking period grade is " + c);
