// function init(){
//     var firstName="Muni";
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }
// // by using return we are not printing the value just passing the reference
// //at this case the executable context sayFirstName is not served hence it willl not gone
// //hence the executable context init also not able to gone

// var value=init();
// console.log(value);//here value doesnot equal to the executing the function rather it act as a function

// //to print value the following invoke is requireed

// value();

// console.log(firstName);//see here the executable context is over 


//another example

function doAdd(x){
    return function(y){
        return x+y;
    }
}

var add5=doAdd(4);//passing reference to add5 and it will act as an function

// var addedValue=add5(4);

// console.log(addedValue);

//another way
console.log(doAdd(5)(4));// it is worked due to executable context

//this is all about closure :)

doAdd()()()//we have number of brackets
//This process is known  as currying
