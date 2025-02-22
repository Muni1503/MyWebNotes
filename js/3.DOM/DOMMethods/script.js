//!how to access the elements
//?1.getElementById()

let p1 = document.getElementById("p1");
console.log(p1);

//?2.getElementsByClassName()

//it will return a Html collection which is similar to array

let containers = document.getElementsByClassName("container");
console.log(containers); //HTMLCollection(2) [div.container, div.container]

console.log(containers[1]); //it will return second container like acccessing in array

//?3.getElementsByTagName()

//it will also return an html collection
let paras = document.getElementsByTagName("p");

//console.log(paras)//HTMLCollection(2) [p#p1, p#p2, p1: p#p1, p2: p#p2]

console.log(paras[0]); //first para is selected

//?4.querySelector

//it is used to target by using css selectors
//it will select the one element only first element

const para1 = document.querySelector("#p1");
console.log(para1); //para 1 is selected

//?5.querySelectorAll()

//if we want to access all the elements we use querySelectorAll
//it will return Nodelist
const divs = document.querySelectorAll("div");
console.log(divs); //NodeList(2) [div.container, div.container]

console.log(divs[0]); //first div is selected

//             !DOM Manipulation

//?1.how to know text present in any tag

let paraText = p1.innerText;
console.log(paraText); //I am para1

//?task

let containerElements = containers[0].innerText;
console.log(containerElements);//if it is one element in div it will give output otherwise it will give something diffferent check once if not understand

//?2.innerHtml

console.log(containers[0].innerHTML);//<p id="p1">I am para 1</p>

//?3.getAttribute("Attribute_name")

//To know all the attributes using it

console.log(p1.getAttribute("class"));//para1 para paracheck--all paragraph class names which is returned by space separator
console.log(p1.getAttribute("id"));//p1

//?task
console.log(containers[1].getAttribute("class"));//container



//?4.setAttribute("Attribute_name","new_value")

//it will replace the attribute values means ol dvalues of attributes will be deleted

console.log(p1.getAttribute("class"));//para1 para paracheck
p1.setAttribute("class","paragraph");
console.log(p1.getAttribute("class"));//paragraph





