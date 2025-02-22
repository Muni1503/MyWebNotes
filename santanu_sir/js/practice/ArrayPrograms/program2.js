//After which the greatest is available
//if it is not available then it will return -1;

let arr = [33, 31, 30, 29, 28, 33, 34];
let res1 = [];

for (let i = 0; i < arr.length; i++) {
  let count = 1;
  let found=false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      res1.push(count);
      found=true;
      break;
    } else {
      count++;
    }
  }
  if(!found){
    res1.push(-1);
    
  }
  
}

console.log(res1);
