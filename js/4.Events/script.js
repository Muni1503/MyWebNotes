//! what is event
//Events are things that happen in the system  when you are programming

//? For example:

// The user selects, clicks, or hovers the cursor over a certain element.
// The user chooses a key on the keyboard.
// The user resizes or closes the browser window.
// A web page finishes loading.
// A form is submitted.
// A video is played, paused, or ends.
// An error occurs.

//!Event handler

//1.To react to an event, you attach an event handler to it.
//2.This is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires.
// When such a block of code is defined to run in response to an event, we say we are registering an event handler
//?Note:
// Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although
//strictly speaking, they work together. The listener listens out for the event happening,
//and the handler is the code that is run in response to it happening.

//!create  button when we click change the background color randomly

const btn = document.getElementsByTagName("button");
const colorChangeBtn = btn[0];

const random = (num) => {
  return Math.floor(Math.random() * (num + 1));
};

function colorChange() {
  const randomCol = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = randomCol;
}

//!addEventListener

///?we can also use addEventListener to fire an event

// colorChangeBtn.addEventListener("click",()=>{
//     const randomCol=`rgb(${random(255)},${random(255)},${random(255)})`;
//     document.body.style.backgroundColor=randomCol;
// });

//?addEventListener will take two parameters
//? first one is the string "click", to indicate that we want to listen to the click event. Buttons can fire lots of other events,
// ?such as "mouseover" when the user moves their mouse over the button, or "keydown" when the user presses a key and the
//?button is focused.

//?secondly a function to call when the event happens. In our case, the function generates a random RGB color and
//?sets the background-color of the page <body> to that color.

//!focus and blur —
//?The color changes when the button is focused and unfocused;
//?try pressing the tab to focus on the button and press the tab again to focus away from the button.

// colorChangeBtn.addEventListener("focus",()=>{
//     const randomCol=`rgb(${random(255)},${random(255)},${random(255)})`;
//     document.body.style.backgroundColor=randomCol;
// });

// colorChangeBtn.addEventListener("blur", () => {
//   const randomCol = `rgb(${random(255)},${random(255)},${random(255)})`;
//   document.body.style.backgroundColor = randomCol;
// });

//These are often used to display information about filling in form fields when they are focused,
//or to display an error message if a form field is filled with an incorrect value.

const textField = document.getElementById("name");
// textField.addEventListener("focus",()=>{
//     alert("Enter the name");
// })

// textField.addEventListener("blur", () => {
//   alert("name entered successfully");
// });

//!dblclick

// colorChangeBtn.addEventListener("dblclick",()=>{
//     const randomCol=`rgb(${random(255)},${random(255)},${random(255)})`;
//     document.body.style.backgroundColor=randomCol;
// });

//!mouseover and mouseout —
//?The color changes when the mouse pointer hovers over the button, or when the pointer moves off the button, respectively.

// colorChangeBtn.addEventListener("mouseover",()=>{
//     const randomCol=`rgb(${random(255)},${random(255)},${random(255)})`;
//     document.body.style.backgroundColor=randomCol;
// });

//?mouseout

// colorChangeBtn.addEventListener("mouseout",()=>{
//     const randomCol=`rgb(${random(255)},${random(255)},${random(255)})`;
//     document.body.style.backgroundColor=randomCol;
// },);

//!Remove Event listeners

//?If you've added an event handler using addEventListener(), you can remove it again using the removeEventListener() method.

// textField.removeEventListener("blur",()=>{
//     alert("name entered successfully");
// });
//?event is removed

//!AbortSignal and abort()

//?Event handlers can also be removed by passing an AbortSignal to addEventListener() and then later calling abort()
//?on the controller owning the AbortSignal

//?1.first we have to create an controller

const controller = new AbortController();

//?2.pass the Abort signal  in the eventListener where we want to remove it later some other time usually at the end.
//?it can be passed as an third argument for event listener function

textField.addEventListener(
  "blur",
  () => {
    alert("name entered successfully");
  },
  { signal: controller.signal } // pass an AbortSignal
);

//?3.call the abort function to remove
// controller.abort();

//?we can also abort any/all event handlers associated with this controller

colorChangeBtn.addEventListener(
  "dblclick",
  () => {
    const randomCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = randomCol;
  },
  { signal: controller.signal }
);

//?3.call the abot function it will remove two eventListener events
controller.abort();

//==>For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, 
//==>it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing 
//==>different actions in different circumstances: all you have to do is add or remove handlers.

//!d/b removeEventListener and AbortController

//using removeEventListener we can remove one event at a time
//but in abortController we can remove n number of events

//!Adding multiple event listeners for single event

// colorChangeBtn.addEventListener(
//     "click",
//     () => {
//       const randomCol = `rgb(${random(255)},${random(255)},${random(255)})`;
//       document.body.style.backgroundColor = randomCol;
//     }
//   );

// colorChangeBtn.addEventListener("click",()=>{
//     console.log(" i am clicked");
// })  

//Both functions would now run when the element is clicked.


//!other eventListener mechanism
//?event handler properties and inline event handlers.

//?event handler properties

colorChangeBtn.onclick=()=>{
    alert(" i am an color change btn")
}

//?inline event handlers 
//the one we are using in html

//?It is recommended to use addEventListener() to register event handlers. It's the most powerful
//? method and scales best with more complex programs


  
