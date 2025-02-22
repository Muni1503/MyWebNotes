
// //!fetch

// let fetchedData=fetch("https://api.github.com/users");

// //console.log(fetchedData);//?promise

// fetchedData.then((data)=>{
//     //console.log(data)//?it will give some response
//     let jsonData=data.json();//converting the response into json
//     //console.log(jsonData)//?promise
    

//     jsonData.then((finalData)=>{
//         console.log(finalData)
//     }).catch((err)=>{
//         console.log(err)
//     })
// }).catch((err)=>{
//     console.log(err)
// })


//!fetch everyone login data

let div=document.querySelector(".container");
let ol=document.createElement("ol");
            div.append(ol);

let fetchedData=fetch("https://api.github.com/users");

//console.log(fetchedData);//?promise

fetchedData.then((data)=>{
    //console.log(data)//?it will give some response
    let jsonData=data.json();//converting the response into json
    //console.log(jsonData)//?promise
    

    jsonData.then((finalData)=>{
        console.log(finalData.map((ele)=>{
            let li=document.createElement("li");
            li.innerText=ele.login;
            ol.append(li);

        }))
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})