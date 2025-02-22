
//!Rest Parameter

//ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...). 
//A rest parameter allows you to represent an indefinite number of arguments as an array.

function fn(a,b,...args) {
    
console.log(args)
 }
// The last parameter (args) is prefixed with the three dots ( ...). It’s called a rest parameter ( ...args). 

//All the arguments you pass to the function will map to the parameter list. In the syntax above, the first argument maps to a,
// the second one maps to b, and the third, the fourth, etc., will be stored in the rest parameter args as an array.
// For example:

fn(1,2,3,4,5,6,7);//[ 3, 4, 5, 6, 7 ]

fn(1,2);//[]


const arr=[10,20,"rao","is","a","good",30,40];


//const[val1,val2,...rest,val3,val4]=arr;

//An rest element will be last in destructuring

const[va1,va12,...rest]=arr;

console.log(rest);//[ 'rao', 'is', 'a', 'good', 30, 40 ]
//?notice that it is taking afterr two elements because we give two elements

const[...allrest]=arr;
console.log(allrest);//[10,20,"rao","is","a","good",30,40]


//!spread operator

//ES6 provides a new operator called spread operator that consists of three dots (...). 
//The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
// For example:

const cars1 = ["AUDI", "BMW", "TATA", "MERCEDES"];
// Copied elements from cars1 to cars2 here
const cars2 = [...cars1];

// Copied elements from cars1 to cars3 here
// and also add some new elements in cars3
const cars3 = [...cars1, "NISSAN", "TOYOTA"];

console.log(cars1);
console.log(cars2);
console.log(cars3);
