
//!import and export
//Using import and export in your JavaScript application makes it more powerful. 
//They allow you to create separate and reusable components.

//It is simple! export allows you to export a module to be used in another JavaScript component. 
//We use import to import that module to use it in our component.

//!Here i am going to import
//?import exp from "./function"
//Cannot use import statement outside a module //so here we cannot use instead

const imported=require("./function");

console.log(imported.exp("rao",23))

//!We can give default parameters

function say(message='Hi') {
    console.log(message);
}

say();//Hi
say("Hello i am not default one")//Hello i am not default one