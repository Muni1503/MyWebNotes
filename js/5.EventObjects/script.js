
//!Event objects

//?Sometimes, inside an event handler function, you'll see a parameter specified with a name such as event, evt, or e. 
//?This is called the event object and it is automatically passed to event handlers to provide extra features and information

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener("click", bgChange);

//Here you can see we are including an event object, e, in the function, and in the function setting a background color style 
//on e.target — which is the button itself. The target property of the event object is always a reference to 
//the element the event occurred upon.

//?e.target will target the the element where the event occur on

//?you can give any name to event object

//?Most event objects have a standard set of properties and methods available on the event object

//?Some event objects add extra properties that are relevant to that particular type of event. For example, the keydown event fires 
//?when the user presses a key.Its event object is a KeyboardEvent, which is a specialized Event object 
//?with a key property that tells you which key was pressed:

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


//!preventing default behaviour

//?Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. 

//?The most common example is that of a web form, for example, a custom registration form. When you fill in the details and
//?  click the submit button, the natural behavior is for the data to be submitted to a specified page  on the server for processing,
//? and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified).

//?The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission 
//?to the server and give an error message saying what's wrong and what needs to be done to put things right. Some browsers 
//?support automatic form data validation features, but since many don't, you are advised to not rely on those and implement 
//?your own validation checks. Let's look at a simple example.


const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});
