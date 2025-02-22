//here we are going to know how to operate api
//we cannot run it using node

fetch('https://api.chucknorris.io/jokes/random')
.then((random)=>{
    return random.json()
})
.then((data)=>{
    var joke=data.value;
    console.log(joke);
})
.catch();//run it on console
//we can add catch to handle error as try catch block