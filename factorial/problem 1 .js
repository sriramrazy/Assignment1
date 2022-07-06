const n = parseInt(prompt("Enter your number: "));
if (n < 0)
{
  console.log("Negative integers don't have Factorial");
} else if(n == 0) {
  console.log("Factorial of 0 is 1");
} 
else {
  let f = 1;
for(i = 1; i <= n; i++){
  f = f * i;
}
console.log(f);
}