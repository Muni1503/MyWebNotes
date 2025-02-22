//how to grab elements 

var title=document.getElementsByTagName('h1')//this will return an array

var title=document.getElementsByTagName('h1')[0].innerText//to see the what text in firsst element

//id are unique that why getElementById()
//className are may be same for some elements thats why getElementsByClassName()

//query selector-it is the most probable way used to select elements

var title=document.querySelector("h1");//defining tag name

var title=document.querySelector(".title");//grabing class by using class name

var title=document.querySelector("#title");//grabing the element by using idname

title.innerText;

//there are two functions actually calleed

// setTimeout(function ,milliseconds)

// setInterval(function,milliseconds)
    
})

