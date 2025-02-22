
// !  how to access elements 

// ! 1.  how to select by using id

let p1 = document.getElementById("p1")

// console.log(p1)


// ! 2.  how to select by using classname


let containers = document.getElementsByClassName("container")

// console.log(containers)


// ! 3. how to select by using tagname

let heading1 = document.getElementsByTagName("h1")


// ! 4. how to select by using selector



let div = document.querySelector(".container")
let para = document.querySelector("#p1")


// ! 5. querySelectorAll()


let divs = document.querySelectorAll(".container")



// !             DOM Manipulation 



//? how to know what text is present inside any tag 

// !  1. innerText

let paragraph = document.getElementById("p1")

// console.log(paragraph.innerText)

// target second container and print what is written inside that 


let containers1 = document.getElementsByClassName("container")
// console.log(containers1[1].innerText)


// ! 2. innerHTML

// console.log(containers1[1].innerHTML)


// ! 3. getAttribute("attribute_name")

let heading2 = document.getElementById("head")

// console.log(heading2.getAttribute("class"))


// ! 4. setAttribute("attribute_name",newValue)

// heading2.setAttribute("class",'san');
// heading2.getAttribute()



// ! 5.  add new class 

console.log(heading2.classList)

heading2.classList.add('light')

console.log(heading2.classList)

// !  how to remove 

 heading2.classList.remove('light')


// ! 6. change color using js

heading2.style.color = 'red'



// !  creating element 


let div3 = document.createElement("div");

div3.classList.add("container3")
div3.style.backgroundColor = 'green';
div3.innerHTML = ' <h1>hello I am text from js</h1>'

//!  after creating how to display on the screen 

let landmark = document.querySelector(".container")  


landmark.after(div3)
// landmark.before(div3)
// landmark.append(div3)
// landmark.prepend(div3)