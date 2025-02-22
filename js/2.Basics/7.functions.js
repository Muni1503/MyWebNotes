//!Functions

//==>Another essential concept in coding is functions, which allow you to store a piece of code that does a single task 
//==>inside a defined block, and then call that code whenever you need it using a single short command — rather than having 
//==>to type out the same code multiple times.

//The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself.
//For example:some number functions like isFinite(),isNaN(),parseFloat(),parseInt()

//!Functions vs methods

//A function is a standalone block of code that performs a task or calculates a value.
//It can be defined globally or locally (inside another function or block).
//Functions are called independently, not tied to any specific object.

//?Example:
function greet() {
    console.log('Hello, world!');
}

greet();  // Calling the function


//!Methods:

//A method is a function that is associated with an object or a class.
//Methods are defined as properties of an object or within a class in JavaScript.
//They are called on objects and often manipulate or act upon the object's data.

//?Example:

const person = {
    name: 'John',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

person.greet();  // Calling the method on the object 'person'
//?Key Differences:
//Function: Independent, not necessarily tied to an object.
//Method: Associated with an object, often works with the object's properties using this.

//?In summary:

//Functions: functionName()
//Methods: object.methodName()

//!invoking an function

//function name followed by paranthesis
greet();

//!Function parameters

//Some functions require parameters to be specified when you are invoking them

//The browser's built-in string replace() function however needs two parameters — the substring to find in the main string,
// and the substring to replace that string with:

const myText = "I am a string";
const newString = myText.replace("string", "sausage");

console.log(newString);//I am a sausage

//!optional parameter

//Sometimes parameters are optional — you don't have to specify them. If you don't,
// the function will generally adopt some kind of default behavior. 

//As an example, the array join() function's parameter is optional:

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();//here defaulty it will take ,
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

//!Default parameters

//If you're writing a function and want to support optional parameters, you can specify default values 
//by adding = after the name of the parameter, followed by the default value:

function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
  }
  
  hello("Ari"); // Hello Ari!
  hello(); // Hello Chris!

//!Anonymous functions

//you can also create a function that doesn't have a name:
(function () {
    alert("hello");
  });
  
//This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects 
//to receive another function as a parameter. In this case, the function parameter is often passed as an anonymous function.  

//textBox.addEventListener("keydown", function (event) {
    //console.log(`You pressed "${event.key}".`);
  //});//passing the function as an argument to the addEventListener function which is anonymous function 

  //!Function with expression

  //?an anonymous function which is stored in variable .we call that as function expreession

  let  func=function(){
    console.log("hi");
  }

  func();

//!arrow function

//If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function

// textBox.addEventListener("keydown", (event) => {
//     console.log(`You pressed "${event.key}".`);
//   });
  
//If the function only takes one parameter, you can omit the parentheses around the parameter:  

// textBox.addEventListener("keydown", event => {
//     console.log(`You pressed "${event.key}".`);
//   });
  
//Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword 
//and implicitly return the expression. 
//In the following example, we're using the map() method of Array to double every value in the original array:

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

//!Function scope and conflicts

//Let's talk a bit about scope — a very important concept when dealing with functions. 
//When you create a function, the variables and other things defined inside the function are inside their own separate scope, 
//meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

//The top-level outside all your functions is called the global scope. 
//Values defined in the global scope are accessible from everywhere in the code.


//!creating our own function

const greetings=name=>{
    console.log(`Hi ${name}`)
}

greetings("muni");

//!return values

//Return values are just what they sound like — the values that a function returns when it completes.

function random(number) {
    return Math.floor(Math.random() * number);
  }

//A return is just returned we must need to store it in a container and print or directly print

console.log(random(4));

//!call back function
//In JavaScript, you can also pass a function as an argument to a function. 
//This function that is passed as an argument inside of another function is called a callback function. For example,


//!Higher order function
//The function which will take function as an argument that is higher order function

function hi(){
  console.log("hi")
}

let hello1=(a,b,c)=>
  {
  console.log(a);
  console.log(b);
  c();
}
hello1("hello","namastae",hi);

//The look at the line 180 hello1 is a higher order function and hi is a call back function



//!IIFE(Immediate Tnvoke Function Expression)

(function(){
  console.log("I am IIFE")
})();

//?when ever we are using IIFE we have use semicolon in the before line








