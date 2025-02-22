//in functional programming function are treated as first class citizen
//we can store function in a variable,we can pass function in another function,we can receive it as an 
//parameter inside another function

function sayHello (){
    console.log("helloo");
    console.log("again hello");
};

sayHello();

//IIFE(self executing anonymns function)-it will execute without calling or invoking

(function (){
    console.log("helloo");
    console.log("again hello");
})();

//that all..:)

//functional programming
//it is a way style of writing programming and treating some values and some functions 
//in a bid different way  then we use to treat them in object oriented programming

//four core important things
//1.in functional programming we keep our data and functions totally separate
//2.declare more variable then redefining an variable
//3.functions are treated as first class..
