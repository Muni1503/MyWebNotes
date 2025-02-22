//null is a falsy value where as string"null" is not a falsy value and ""is a falsy value

//falsy values
//1.undefined
//   2.0
//   3.""
//   4.NaN
//   5.null

//apart from the above values all are truthy values

//== it just an equal it doesnot check datatype

// var result=(2=="2");
// console.log(result);//true

// var result=(2==="2");
// console.log(result);//false

var user;
console.log(user);//undefined

user=null;
console.log(user);

user="";
console.log(user);

user=NaN;
console.log(user);

user=0;
console.log(user);

if(user){
    console.log("it is not a falsy value");
}//prints when user  is true


                                           //Type coercision


//Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. 
//This includes conversion from Number to String, String to Number, Boolean to Number, etc.
// when different types of operators are applied to the values.


// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings   
let x = 10 + '20';
let y = '20' + 10;
 
// The Boolean value true is converted
// to string 'true' and then '+'
// concatenates both the strings
let z = true + '10';
 
console.log(x);
console.log(y);
console.log(z);

//!can explicit type coercison is possible
//Yes, explicit type coercion is possible in JavaScript. It refers to manually converting a value from one type to another, 
//and there are several ways to achieve it. Here are the common methods:

let num = 42;
let str = String(num); // "42"

let num1 = 42;
let str1 = num.toString(); // "42"

let str2 = "42";
let num3 = Number(str); // 42

let num4 = 1;
let bool = Boolean(num); // true

//converting to an object

let num5 = 42;
let obj = Object(num); // [Number: 42]