//In any programming language, the code needs to make decisions and carry out actions accordingly depending on different inputs. 
//For example, in a game, if the player's number of lives is 0, then it's game over.

//!if-else syntax

let condition=true;
if (condition) {
    /* code to run if condition is true */
  } else {
    /* run some other code instead */
  }

//?---------------------------------------------------------------------------------------------------------------------------------

//!only if syntax

if (condition) {
    /* code to run if condition is true */
 }
  
  /* run some other code */

//However, you need to be careful here — in this case, the second block of code is not controlled by the conditional statement, 
//so it always runs, regardless of whether the condition returns true or false.  

      //?Real Example
      let a=2;
      let b=4;
      if(a>b){
        console.log(`a:${a} is greater`)
      }
      else{
        console.log(`b:${b} is greater`)
      }
//?---------------------------------------------------------------------------------------------------------------------------------      

//!else if

//if we have more than one condition at that time else-if is used
//greatest of 3

//It is a way to chain on extra choices/outcomes to your if...else

let num1=5;
let num2=10;
let num3=7;

if(num1>num2 && num1>num3){
    console.log(`${num1} is greater among the three`)
}
else if(num2>num3){
    console.log(`${num2} is greater among the three`)
}
else{
    console.log(`${num3} is greater among the three`)
}

//?else is mandatory in else if unlike java where else is not mandatory

//?---------------------------------------------------------------------------------------------------------------------------------


//!Nesting if else

//It is perfectly OK to put one if...else statement inside another one — to nest them

let temperature =56;
let haveSunScreen=false;

if(temperature > 65){
    if(haveSunScreen){
        console.log("It is too hot put the sun screen and go out")
    }
    else{
        console.log("It is too hot buy sun screen")
    }
}
else{
    console.log("It is not hot let chill outside")
}

//?---------------------------------------------------------------------------------------------------------------------------------

//!Multiple conditions 

//if you want to test multiple conditions without writing nested if...else statements, logical operators can help you.

// &&--AND
// ||-OR
// !--not

if(temperature>65 && haveSunScreen){
    console.log("It is too hot put the sun screen and go out")
}
else if(temperature>65 && !haveSunScreen){
    console.log("It is too hot buy sun screen")
}
else{
    console.log("It is not hot let chill outside")
}

//?------------------------------------------------------------------------------------------------------------------------------------

//!Switch Statements

//They take a single expression/value as an input, and then look through several choices 
//until they find one that matches that value, executing the corresponding code that goes along with it. 

//?syntax

            //switch (expression) {
                //case choice1:
                    // run this code
                    //break;
  
                //case choice2:
                    // run this code instead
                    //break;
                // include as many cases as you like
  
                //default:
                    // actually, just run this code
                    //break;
            //}

let day=9;

switch(day){
    case 1:
        console.log("monday");
        console.log("week start");
        break;
    case 2:
        console.log("Tuesday");
        break; 
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        console.log("week End");
        break;
    case 7:
        console.log("sunday");
        console.log("week End");
        break; 
    default:
        console.log("Harre yarrr") ;
        console.log("enter the crt input") ;
        console.log("Week days ranges from 1-7");
        break;                         
}
  
//?----------------------------------------------------------------------------------------------------------------------------------

//!Ternary operatorr

//?syntax

//condition? run this code : run this code instead

isBirthday=true;

const greeting = isBirthday
  ? "Happy birthday Mr.RAo — we hope you have a great day!"
  : "Good morning Mrs. Smith.";

console.log(greeting)  ;


//!for  arrays

let arr=[10,20,302,'Muni',true,6]

//?for of loop
//it is used to accesss the elements of an array 
for (let ele of arr){
    console.log(ele)
}

//?for in loop
//it is used to accesss the index of an array 

for (let ind of arr){
    console.log(ind)
}







  