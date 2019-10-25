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

let h = ((Number(homework1)) + (Number(homework2)) + (Number(homework3)));
let q = ((Number(quizzes1)) + (Number(quizzes2)) + (Number(quizzes3)));
let t = ((Number(tests1)) + (Number(tests2)) + (Number(tests3)));

let c = ((0.15*h) + (0.35*q) + (0.5*t)) / 3 ;

let r = Math.round (c);
c = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("Your marking period grade is " + c + "%.");
