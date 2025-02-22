


// console.log(now);

let container=document.querySelector(".container");


let getDate=()=>{
    let now=new Date();
    let hour=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();

    let TimeMode=hour>11?"PM":"AM";
    hour=hour>12 ? hour-12:hour;
    hour=hour<10 ? "0"+hour:hour;
    min=min<10 ? "0"+min:min;
    sec=sec<10 ? "0"+sec:sec;


    
    container.innerText=`${hour}:${min}:${sec} ${TimeMode}`;    
    
    
}

setInterval(getDate,1000);




