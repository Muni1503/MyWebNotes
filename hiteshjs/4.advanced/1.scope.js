//for years there is a scope issue in javascript
//{}this is called as scope .now this is an empty scope in other languages
//but js consider fn as a scope and also an {}sometimes
//so the let code word introdiced
//it is recommended to use let in backend and some sensitive places

//var and let

//consider

// console.log(firstName);//throw an undefined in output
// var firstName="Muni";

//but it is good at backend instead we need to show an error

// console.log(firstName);//now throw an error in output
// let firstName="Muni";

// if(true){
//     var lastName="rao";

// }
// console.log(lastName);//this will print an lastName

//but in loops we can use same name repeatedly..that time if we use var it gets messed up
//instead we use let
//let ends the value of that variable when loops get over..it clear the memory

if(true){
    let lastName="rao";

}
console.log(lastName);

//this will show an errror


