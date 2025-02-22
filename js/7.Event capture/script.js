
//!Event capture

//An alternative to the event propagation(event bubbling)
//This is like event bubbling but the order is reversed: 
//so instead of the event firing first on the innermost element targeted, and then on successively less nested elements,
// the event fires first on the least nested element, and then on successively more nested elements, until the target is reached.

//Event capture is by default disabled
//To enable it ypu have to pass the capture option in addEventListener

const output = document.querySelector("#output");
function handleClick(e) {
  output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
}


const container = document.querySelector("#container");
const button = document.querySelector("button");

document.body.addEventListener("click", handleClick, { capture: true });
container.addEventListener("click", handleClick);
button.addEventListener("click", handleClick);

//?explanation

//when the button is clicked it will check whether the top most parent also having same event(click),then it will check whether
//capture is declared as true if it iis case it will print the top parent(body) function

//?note
//event name should be same but function need not be same

//Like that it will check all the parent listener if capture is true then it will print otherwise the child element will print
//and the upper parent and last only uppermost parent(bubbling will happen if capture is not true)

//?output

// You clicked on a BODY element
// You clicked on a BUTTON element
// You clicked on a DIV element//it is last because there is no capture:true

//?By default almost all event handlers are registered in the bubbling phase, and this makes more sense most of the time.


