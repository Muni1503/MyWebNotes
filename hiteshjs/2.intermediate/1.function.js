//refering a function without paranthesis eg.sayHello;
//calling a function is with paranthesis eg.sayHello();

function sayHello(){
    console.log("hello muni");
}

// function sayBye(name){
//     console.log("bye bye "+ name);
// }//This is the one way

//most modern way is
function sayBye(name){
    console.log(`bye bye ${name}`);
}

function ret(){
    return"Hello rao"
}

ret();//it doesnot print anything

var retu=ret();
console.log(retu);

//another way
console.log(ret());

sayHello();
sayBye("Rao");


