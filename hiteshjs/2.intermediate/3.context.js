//global context

//consider

function sayHello(){
    console.log("Hello");
}

sayHello();

//This will print hello as we known//

//but consider the below code

sayHello();

function sayHello(){
    console.log("Hello");
}

//it will also print hello due to global context..
//it is because of global context it will scan entire code first and whenever we need function it calls
//window is a global context in browser..but in node we donot want window

var name="muni";
if(name===window.name){
    console.log("it is true");
}//executee this in browser console..node will throw an error

//node engine ultimately supports the V8 engine.








