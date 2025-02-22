//two types of context
//1.global context
//2.executable context

//executable context is responsible for executing whole function..it is arranged like heap or stack
//if not understand watch the video hoisting 
    
//Two rules for executable context
//1. Function declarations are scanned and made available
//2.variable declaration are scanned and made undefined

function tipper(a){
    var bill=parseInt(a);//parseint is used when we passes a string(eg."5") it will change into integer.
    console.log(bill+5);
}

tipper(5);

var bigTipper = function(a){
    var bill=parseInt(a);//parseint is used when we passes a string(eg."5") it will change into integer.
    console.log(bill+15);
}

bigTipper(200);// this will work properly

// bigTipper(200);//this will throw an error because of second rule variable undefined..

// var bigTipper = function(a){
//     var bill=parseInt(a);//parseint is used when we passes a string(eg."5") it will change into integer.
//     console.log(bill+15);
// }

//This part of var code which is correct is known as hoisting..this concept also known as hoisting


//var name="muni";
//console.log(name);


console.log(name);
var name="muni";//it will throw an undefined

function sayHello(){
    var name="ice";
    console.log(name);

}
sayHello();//after this the executable context of function gets over hence the after line print muni.
console.log(name);

//here the main thing we discussed about is variable object
//there are three main things in context
//1.variable obbject
//2.scope chain
//3.This keyword