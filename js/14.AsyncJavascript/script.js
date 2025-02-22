//!intro

//Asynchronous programming is a technique that enables your program to start a potentially long-running task 
//and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.
// Once that task has finished, your program is presented with the result.

//?remember that our javascript is an synchronous language it will execute line by line
//?if previous one take time then every task below it will also wait in synchronous case 

//many functions provided by browsers especially the ones which will take more time and therefore, are asynchronous.
//They are default asynchronous
//For Example

//Making HTTP requests using fetch()
//Accessing a user's camera or microphone using getUserMedia()
//Asking a user to select files using showOpenFilePicker()

//?we may not to implement our asynchronous javascript functions everytime,we need to use the asynchronous functions correctly(already defined)

//!synchronous programming
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"

//?We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. 
//?At each point, the browser waits for the line to finish its work before going on to the next line.
//? It has to do this because each line depends on the work done in the preceding lines.

//That makes this a synchronous program. 

//The reason for this is  js is a single threaded language.. A thread is a sequence of instructions that a program follows. 
//Because the program consists of a single thread, it can only do one thing at a time:
// so if it is waiting for our long-running synchronous call to return, it can't do anything else.

//?what we need to do it an async
//1.Start a long-running operation by calling a function.
//2.Have that function start the operation and return immediately, so that our program can still be responsive to other events.
//?(function will take care of everything it will wait our main thread wont)
//3.Have the function execute the operation in a way that does not block the main thread, for example by starting a new thread.
//4.Notify us with the result of the operation when it eventually completes

//!Event handlers

//Event handlers are really a form of asynchronous programming: you provide a function (the event handler) that will be called, 
//not right away, but whenever the event happens. 

//!call backs

//An event handler is a particular type of callback. A callback is just a function that's passed into another function,
// with the expectation that the callback will be called at the appropriate time. As we just saw, 
//callbacks used to be the main way asynchronous functions were implemented in JavaScript.