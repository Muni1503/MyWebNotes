//!Event Bubbling

//We've seen that a web page is composed of elements — headings, paragraphs of text, images, buttons, and so on —
//and that you can listen for events that happen to these elements.

//For example, you could add a listener to a button, and it will run when the user clicks the button.

//We've also seen that these elements can be nested inside each other: for example, a <button> could be placed inside a <div> element.
//In this case we'd call the <div> element a parent element, and the <button> a child element.

//?Here we will see what happens when we add a eventlistener to a parent element and the user clicks the button(child element)
//?what will happen

//!code

// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

//!code ends

// const container = document.querySelector("#container");
// container.addEventListener("click", handleClick);

//You'll see that the parent fires a click event when the user clicks the button:

//output:You clicked on a DIV element

//This makes sense: the button is inside the <div>, so when you click the button you're 
//also implicitly clicking the element it is inside.

//!Bubbling example
//?what will happen if we add eventListener to both parent and child

// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);


//?output
//You'll see that all three elements fire a click event when the user clicks the button:

// You clicked on a BUTTON element
// You clicked on a DIV element
// You clicked on a BODY element


// In this case:

// the click on the button fires first
// followed by the click on its parent (the <div> element)
// followed by the <div> element's parent (the <body> element).

//? We describe this by saying that the event bubbles up from the innermost element that was clicked.


//!problems created by event Bubbling

// When the user clicks the "Display video" button, show the box containing the video, but don't start playing the video yet.
// When the user clicks on the video, start playing the video.
// When the user clicks anywhere in the box outside the video, hide tconst btn = document.querySelector("button");

//?code

// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));
// video.addEventListener("click", () => video.play());
// box.addEventListener("click", () => box.classList.add("hidden"));



//?we have added three click events
// 1.one on the <button>, which shows the <div> that contains the <video>
// 2.one on the <video>, which starts playing the video
// 3.one on the <div>, which hides the video

//You should see that when you click the button, the box and the video it contains are shown. 
//But then when you click the video, the video starts to play, but the box is hidden again!

//The video is inside the <div> — it is part of it — so clicking the video runs both the event handlers, causing this behavior to add 
//hidden class again which is done by div(parent class)

//!How to fix this problem--using stopPropagation()

//?The Event object has a function available on it called stopPropagation() which, when called inside an event handler, 
//?prevents the event from bubbling up to any other elements.

const btn = document.querySelector("button");
const box = document.querySelector("div");
const video = document.querySelector("video");

btn.addEventListener("click", () => box.classList.remove("hidden"));

video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

box.addEventListener("click", () => box.classList.add("hidden"));

//?now see it is properly working no event bubbling happened




