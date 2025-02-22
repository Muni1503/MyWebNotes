//<ul class="list-group">
{/* <li class="list-group-item">
Javascript course<span class="float-right">$2.1</span>
</li>
</ul> */}//..we are to create this in js

//First create an array of objects for an input

const courses=[
    {
        name:"complete reactjs course",
        price:2.7
    },
    {
        name:"complete angular course",
        price:2.5

    },
    {
        name:"nodejs",
        price:2.9
    },
    {
        name:"expressjs",
        price:2.3
    },
]

//create a function that should return the values

function generateList(){
    //selected the unordered list from html

    const ul=document.querySelector(".list-group");
    ul.innerHTML="";//imp to avoid loop or repeat of elements

    //going to loop through the array..feel free to use for loop

    courses.forEach((course)=>{
            const li=document.createElement("li");
            li.classList.add("list-group-item");//notice that class are may e list of classes hence used classlist

            const name=document.createTextNode(course.name);
            li.appendChild(name);

            const span=document.createElement("span");
            span.classList.add("float-right");

            const price=document.createTextNode("$"+course.price);
            li.appendChild(price);

            li.appendChild(span);
            ul.appendChild(li);
    })
}

//generateList();

//another way of calling
window.addEventListener("load",generateList);

//here we donot need to call the function we only passing the referencr
//eventlistner will make a running part of function

const button=document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b)=> a.price-b.price)
    //it is sorted the array
    //then to print

    generateList();
});
//assignment  
const dbutton=document.querySelector(".btn-primary");
dbutton.addEventListener("click",()=>{
    courses.sort((a,b)=> b.price-a.price)
    //it is sorted the array
    //then to print

    generateList();
})