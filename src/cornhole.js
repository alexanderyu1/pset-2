const length = 48;
const width = 24;
const diameter = 6;
const radius = diameter / 2;
const circlearea = (radius ** 2) * Math.PI;
let c = (length * width) - circlearea;

let r = Math.round (c);
c = c.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2} );

console.log("The surface area of a stadnard Cornhole board is " + c + " square inch(es).");
