var counter=document.querySelector(".counter");

var followers=document.querySelector(".followers");

let count=1;

setInterval(()=>{
    if(count<1000){
        count++;
        counter.innerText=count;
    }
},1);

setTimeout(()=>{

followers.innerText="project completed"
},4500)


//another way

// var counter=document.getElementsByClassName("counter");

// var followers=document.getElementsByClassName("followers");

// let count=1;

// setInterval(()=>{
//     if(count<1000){
//         count++;
//         counter[0].innerText=count;
//     }
// },1);

// setTimeout(()=>{

// followers[0].innerText="project completed"
// },5500);


