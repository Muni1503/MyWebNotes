// let fetchedData=fetch("https://api.github.com/users");

// fetchedData.then((data)=>{
//     let jsonData=data.json();

//     return jsonData
// }).then((finalData)=>{
//     console.log(finalData)
// })


//!async await and exception handling in async await

let fetch_data=async ()=>{
    try{
        let data=await fetch("https://api.github.com/users");
        console.log(data)

        let jsonData=data.json()
        console.log(jsonData)

        jsonData.then((finalData)=>{
            console.log(finalData);
        }).catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}

fetch_data();