
//!setTimeout()--Higher order  method

console.log("start");
console.log("Before setTimeout")
// setTimeout(()=>{
//     console.log("This is set time out")
// });//this will execute after all the statement

//!we can also give time to the setTimeout function

setTimeout(()=>{
    console.log("This is set time out")
},2000)//this will execute after 2 seconds



console.log("After SET Timeout");
console.log("end")

//!examples

//?Example 1
//we have too call hello function after 3 seconds
let hello=()=>{
    console.log("This is hello function")
}

setTimeout(hello,3000);

//?Example 2
setTimeout(()=>{
    console.log("I am an another Example");
},4000);



                         //!SetInterval

// setInterval(()=>{
//     console.log("I am set Interval ");
// },1000)  //It will repeat after 1 second again and again
                              
                       //!clearInterval
 
//we have to stop the setInterval we use clearInterval

let interval=setInterval(()=>{
    console.log("i am an example for clearInterval")
},4000);


//?it will stop the loop immediately
//clearInterval(interval)//It will stop immediately


//?we have to stop after some time interval function executes
setTimeout(()=>{
    clearInterval(interval)
},17000);


                     //!ClearTimeout
let timeout=setTimeout(()=>{
    console.log("hello")
},6000) ;

clearTimeout(timeout);

//!Example

let interval1=setInterval(()=>{
    console.log('hello')
});

let time=setTimeout(()=>{
    clearInterval(interval1);
});

clearTimeout(time);

//?what is the output of above code

//infinite times hello will print(because clearInterval is cleared)
                     




