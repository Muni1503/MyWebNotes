const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const center=document.querySelector(".center");

//window object has lot of properties and one of them is getComputedStyle.if you are trying to grab some of
//the styling or style properties from any particular element
//it just requires to passs on that particular element and once you pass it on
//whatever the property you want to grab make sure that
//if the property have dashes a dash is being removed and capitialize the second word letter
//and how it will be used eg:(background-color= backgroundColor)

//console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor=(selectedElement)=>{
   return window.getComputedStyle(selectedElement).backgroundColor;
};

//console.log(getBgColor(pink));//this will return a rbg color of pink in the console

var orangeElementColor=getBgColor(orange);

orange.addEventListener('mouseenter',()=>{
    center.style.background=orangeElementColor;
})

const magicColor=(element,color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background=color;
    })
}

magicColor(red,getBgColor(red));
magicColor(violet,getBgColor(violet));
magicColor(cyan,getBgColor(cyan));
magicColor(orange,getBgColor(orange));
magicColor(pink,getBgColor(pink));