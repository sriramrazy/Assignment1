const a = parseInt(prompt('Enter value of a:'));
const b = parseInt(prompt('Enter value of b:'));
const c = parseInt(prompt('Enter value of c:'));

let x = (((-b) + (Math.sqrt((b*b)-(4*a*c))))/(2*a)).toFixed(2);

let y = (((-b) - (Math.sqrt((b*b)-(4*a*c))))/(2*a)).toFixed(2);

console.log(x,y)