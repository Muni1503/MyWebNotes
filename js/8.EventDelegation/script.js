//!eventDelegation

 //?Event bubbling isn't just annoying, though: it can be very useful. In particular, it enables event delegation.

 //?In this practice, when we want some code to run when the user interacts with any one of a large number of child elements, 
 //?we set the event listener on their parent and have events that happen on them bubble up to their parent 
 //?rather than having to set the event listener on every child individually.

 //Let's go back to our first example, where we set the background color of the whole page when the user clicked a button. 
 //Suppose that instead, the page is divided into 16 tiles, and we want to set each tile to a random color
 // when the user clicks that tile.

 function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return rndCol;
  }
  
 const container = document.querySelector("#container");
  

  
// container.addEventListener("click",(e)=>{
//     alert(`i am clicked on ${e.target.tagName} `)
// })
//?when we set the event to parent it will be applicable on all its child this is the event delegation

  container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = bgChange();
  });

//!target and currentTarget

//?In Setting a listener on a parent element we're using event.currentTarget. 
//?However, in Event delegation, we're using event.target.

//The difference is that target refers to the element on which the event was initially fired(currently fired event),
// while currentTarget refers to the element to which this event handler has been attached.

//?While target remains the same while an event bubbles up, 
//?currentTarget will be different for event handlers that are attached to different elements in the hierarchy.


const output = document.querySelector("#output");
function handleClick(e) {
  const logTarget = `Target: ${e.target.tagName}`;
  const logCurrentTarget = `Current target: ${e.currentTarget.tagName}`;
  output.textContent += `${logTarget}, ${logCurrentTarget}\n`;
}

const container1 = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick);
container1.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

//?target is the element we are targetting
//?currentTarget identifies the element whose event handler we are currently running:







