var arr = [];
var size = parseInt(prompt('Enter size of array: ')); 
 
for(var a=0; a<size; a++) 
{   
    arr[a] = prompt('Enter array Element ' + (a+1));
}
 


let evenArr = [];
let oddArr = [];
   
  for (let i = 0; i < size; i++) {
      if (i % 2 != 1) {
        evenArr.push(arr[i]);
            }
            else {
                oddArr.push(arr[i]);
            }
        }
evenArr.sort(function(a,b){return a-b});

  
   
   let i = 0;
    for (let j = 0; j < evenArr.length; j++) {
      arr[i] = evenArr[j];
      i=i+2
    }
let x=1;
    for (let j = 0; j < oddArr.length; j++) {
      arr[x] = oddArr[j];
      x=x+2;
      }

console.log(arr);