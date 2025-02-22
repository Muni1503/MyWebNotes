//eventloop is a loop which looks for the event
//eventloop is responsible for queuing the message

//visit the documentation for better understanding
//concurencymodel and event loop(mmdn docs)

//async.js

const uno=()=>{
    console.log("i am one");
}

const duos=()=>{

    setTimeout(()=>{
        console.log("wohoooo");
    },3000);
    console.log("i am two")
}

const three=()=>{
    console.log("i am three");
}

uno();
duos();
three();

//this is non-blocking scenario

