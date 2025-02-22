let num = Number(10);

console.log(num);
console.log(typeof num);

let num2 = Number("10");

console.log(num2);
console.log(typeof num); //number

let num3 = Number("10abc");

console.log(num3); //NaN
console.log(typeof num3); //Number

console.log(typeof NaN); //number

                  //Number Methods
//!parseInt()
console.log("\t\t\t1.Number.parseInt()")

let num4 = Number.parseInt("100abc");
console.log(num4); //100

let num5 = Number.parseInt("abc12");
console.log(num5); //NaN(if it see character it will stop)

//!How to take input from the user
//!using prompt
// let a=prompt("enter one number");
// console.log(a);

//prompt takes the input in string form

// let first = Number.parseInt(prompt("enter first number"));
// let second = Number.parseInt(prompt("enter second number"));
// let res = first + second;
// alert(`The output of ${first} and ${second}=  ${res}`);

//console.log("After sum form user"); //This will execute after the input taken and output printed

//!2.Number.isFinite
console.log("\t\t\t2.Number.isFinite()");
let num6 = 1000;
console.log(isFinite(num6)); //true

let num6_1 = "string";
console.log(isFinite(num6_1)); //false

let num6_2 = 123456787654323456787654323456789876543212345678;
console.log(Number.isFinite(num6_2)); //true

let num6_3=234n;
console.log(Number.isFinite(num6_3));//false(Big int is not finite)

console.log("*********************************************************");

//!3.Number.isInteger();

console.log("\t\t\t3.Number.isInteger()");
let num7 = 1234;
console.log(Number.isInteger(num7));//true

let num7_1=1234.66;//float
console.log(Number.isInteger(num7_1));//false

let num7_2=123n;
console.log(Number.isInteger(num7_2));//false(big int is not integer)

console.log("*************************************");

//!4.isNaN();
// !This is not a number method...In interview they will ask


console.log("\t\t\t4.isNaN()")
console.log(isNaN(123));//false
console.log(isNaN("sam"));//true
console.log(isNaN("123"));//false
console.log(isNaN(123.56));//false
console.log(isNaN(NaN));//true
//!console.log(isNaN(2n));//TypeError: Cannot convert a BigInt value to a number

console.log("_________________________________________")

//!5.Number.isNaN();
console.log("\t\t\t4.Number.isNaN()")
console.log(Number.isNaN(123));//false
console.log(Number.isNaN("123"));//false
console.log(Number.isNaN("sam"));//false
console.log(Number.isNaN(123.56));//false
console.log(Number.isNaN(1n));//false

console.log(Number.isNaN(NaN));//true
console.log("*************************************")

//!6.Number.parseInt()
console.log("\t\t\t6.parseInt");
let num8="10.2";
console.log(Number.parseFloat(num8));//10.2

let num9="10.23X45.99";
console.log(Number.parseFloat(num9));//10.23

    //?it is similar to parseInt method when it sees
    //?an character it will stop
console.log("*************************************")    


//!7.tofixed
console.log("7.tofixed()")
const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);//1.7665849586757463
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);//1.77










