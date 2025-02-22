// var a;
// a=10;
// console.log(a);

// let b;
// b=20;
// console.log(b)

// const c;
// c=50;
// console.log(c)
// var a =10;
// let b=20;
// const c=30;
// console.log(a , b ,c)

// var a = 10;
// a="Hi";
// console.log(a)
// let a = 10;
// a="Helo";
// console.log(a)
// const a = 10;
// a="Hi hello";
// console.log(a)

// var a = 10;
// var a=100;
// console.log(a);
// let a = 10;
// let a=100;
// console.log(a);
// const a = 10;
// const a=100;
// console.log(a);

// !scope of variables
// ~ global , script , local , block
// var a =10
// let b =20;
// const c =30;
// console.log(a , b, c)

// function demo(){
//    var p ="Hi"
//    let  q ="Hello"
//    const r ="JS"
//    console.log(p)
//    console.log(q)
//    console.log(r)
//    // console.log(a , b ,c)
// }
// demo();
// console.log(p , q ,r)
// if(true){
//    var x =10;
//    let y = 20;
//    const z = 30;
//    console.log(x , y , z);
// }

// console.log(x);
// // console.log(y);
// console.log(z)

// !data types
// ~ primitive & non-primitive 
// ? primitive 
//! string , number , boolean , undefined , null , bigInt , Symbol

//? non-primitive 
//! Array , functions object , json object
//!difference between p &  np datatype


// !string
//? "" , '' , ``
// let str1 ="double quotes";
// console.log(str1 , typeof(str1))
// let str2 = 'single quotes'
// console.log(str2 , typeof(str2))
// let str3 = `template literals`
// console.log(str3 ,typeof(str3));
// let str1 = "Hi Hello";

// let str2= "JavaScript";

// // console.log(str1 +" "+ str2+ " " + "How are you");
// console.log(`${str1} ${str2} how are you`)

// let num = 10;
// let n1=10.55;
// let n2 = 10.45678765432;
// console.log(num , typeof(num))
// console.log(n1 , typeof(n1))
// console.log(n2 ,typeof(n2))
// !what is NaN?
// console.log("10"/"10");
// let x ="a"/5;
// console.log(x , typeof(x));

// !undefined
// let a;
// console.log(a ,typeof(a));

// !boolean
// console.log(true ,typeof(true))
// console.log(false ,typeof(false))

// !null
// let x =null;
// console.log(x , typeof(x))

// !function
// ~named , anonymus  , function expression , 
//~immediate invoke , arrow , hof , callback

// !named
// let a =10
// console.log(a)
// function functionName(a){
//    //JS statements
//    console.log(a)
// }
// functionName(10)

// function demo(){
//    console.log("function is printing...")
// }
// demo();

// !anonymus functions
// function(){
//    console.log("anonymus printing...")
// }
// ();

// !function expression
// let x =function(){
//    console.log("anonymus printing...")
// };
// x();
// x();
// x();
// x();
// x();

// !iife
// (
//    function(){
//       console.log("iife printing...")
//    }
// )()();

// !arrow (es6)
// function demo(){
//    console.log("normal function")
// }
// demo();

// !syntax ---- ()=>{}
// let x =_=>console.log("arrow");
// x();

// !HOF & CallBack
// let a = function(){console.log("Sombu people")};
// a();

// function demo(user){
//    return user();
// }
// let x = demo(function(){return "Callback function"});
// console.log(x);

// !closure 
// var uName ="Bharath";
// let isHeLate ="Yes";
// function x(){
//    var a = 10;
//    const c=true;console.log(a ,c)
//    function y(){
//       let user = "Pavan(Java+web)";
//       console.log(user)
//       function z(){
//          console.log(a)
//          console.log(c)
//          console.log(user)
//          console.log(uName)
//          console.log(isHeLate)
//       }
//       z()
//    }
//    y();
// }
// x();


// !function hoisting
// demo();//!function calling
// function demo(){
//    console.log("function hoisting is working with function...")
// }


// !string methods
// let str = "Hello Javascriapt";
// console.log(str.length);
// let x =str.charAt(6);
// console.log(x);
// let x =str.charCodeAt(1);
// console.log(x);
// let x =str.concat(" How are you?");
// console.log(x);
// let x =str.indexOf("a");
// let x =str.lastIndexOf("a");
// console.log(x);
// let str = "Hello Javascript";
// let x =str.repeat(100);
// let x =str.split(" ");
// console.log(x)

// str.slice(start index , end index except that last index);
// let x = str.slice(6 , 10);

// let x= str.slice(-6 , -3);
// console.log(x);
// let str = "Harish";
// let x = str.substring(6,9);
// let x = str.substring(-6);
// console.log(x)
// let str = prompt("enter user name");
// console.log(str);
// console.log(str.length)
// let x = str.trim();
// console.log(x)
// console.log(x.length)

// let str="Hello JS";
// console.log(str.toUpperCase())
// console.log(str.toLowerCase());


// let str = new String("Hello");
// console.log(str);
// console.log(typeof(str))

// let val = str.valueOf();//!Returns the primitive value of the specified object.
// console.log(val);
// console.log(typeof(val));


// let users=["Harish" ,"Bharath" , "Pavan" , "Shambu" ,"Tabrez"];
// console.log(users[2]);
// let arr = [1 , "Hi" ,true , null , undefined , [3,2],{name:"Sam"}];
// console.log(arr[0]);
// console.log(arr[2])
// for(let i = 0 ; i< users.length ; i++){
//    console.log(users[i]);
// }

// let users=["Harish" ,"Bharath" , "Pavan" , "Shambu" ,"Tabrez"];
// console.log(users.length);
// console.log(users.concat("Surya" , "Harsha sir" , "Nagaraj"));
// let users1=["Surya" , "Harsha sir" , "Nagaraj"];
// console.log(users.concat(users1))
// console.log(users.indexOf("Shambu"));

// let arr = [1,4,2,5,6,7,9,8,1,3,4];
// console.log(arr.indexOf(1));
// console.log(arr.lastIndexOf(1));
// arr.push("Hi");
// console.log(arr);
// let x =arr.pop();
// // console.log(arr.pop());
// console.log(x)
// console.log(arr)

// let arr = [1,4,2,5,6,7,9,8,1,3,4];
// arr.unshift("hi");
// arr.shift();
// // console.log(arr);
// let join = arr.join("@");
// console.log(join , typeof(join));
// console.log(arr.reverse());
// let arr = [1,4,2,5,6,7,9,8,1,3,4];
// console.log(arr.sort());
// console.log(arr.sort((a,b)=> b-a));
// console.log(arr.slice(3,7))
// arr.splice(1,4,"Hi");
// console.log(arr.slice(2,5))
// console.log(arr);
// let arr = [1,4,2,5,6,7,9,8,1,3,4];
// let x =arr.map((val , index)=>{
// // console.log(val)
// // console.log(index)
//  return val;
// });
// console.log(x);
// let y =arr.forEach((val , index)=>{
//    // console.log(val)
//    // console.log(index)
//     return val;
//    });
//    console.log(y);
// let arr = [1,4,2,5,6,7,9,8,1,3,4];

// let x = arr.filter((val)=>{
// return val > 4
// });
// console.log(x)
// let arr = [1,4,2,5,6,7,9,8,1,3,4];
// console.log(Array.isArray(arr));

// function demo(){
// return arguments
// }
// let x = demo(2,3,4,5,6,7,8,9);
// console.log(x);
// console.log(Array.isArray(x));

// let y = Array.from(x);
// console.log(y)
// console.log(Array.isArray(y))

// console.log(Array.of(1,2,3,4,5,6,7))

// !rest parameter and spread operator (es6)
//~ ...parameter
// function demo(...a){
// return a;
// }
// let x = demo(1,2,3,4,5,6,7,8,9);
// console.log(x);
// console.log(Array.isArray(x));

// let originalArray = [1,2,3,4,5,6,7,8,9];
// let copiedArray =originalArray;
// copiedArray.splice(1,4);
// console.log(copiedArray)
// console.log(originalArray)

// let originalArray = [1,2,3,4,5,6,7,8,9];
// let copiedArray = [...originalArray];
// copiedArray.splice(1,4);
// console.log(copiedArray);
// console.log(originalArray)

// !Object in javascript
// let obj = {
//     name:"Bharath",
//     age:23,
//     company:"Google",
//     sal:98769,
// };
// console.log(obj.name);
// console.log(obj.sal);
// obj.desig="Developer";
// console.log(obj);
// obj.age = 25;
// console.log(obj)

// delete obj.company;
// console.log(obj);

// let user={
//     name:"Thala",
//     city:"Chennai",
//     movies:{
//         crime:["Billa","Deena","Mankatha"],
//         romantic:{
//             romantic1:"vaali",
//             romantic2:"abc"
//         }
//     }
// }
// console.log(user.name);
// console.log(user.movies.crime[0])
// console.log(user.movies.romantic.romantic1)

// let userDetails=[
//     {
//         name:"Bharath",
//         company:"Qsp",
//         city:"Mangalore"
//     },
//     {
//         name:"Shambu",
//         company:"TY",
//         city:"Hubli"
//     },
//     {
//         name:"Surya",
//         company:"Qsp",
//         city:"Dharmapuri"
//     },
//     {
//         name:"Harish",
//         company:"TY",
//         city:"Hassan"
//     }
// ];

// userDetails.map(val=>{
//     console.log(val);
//     console.log(val.name);
//     console.log(val.city);

// })

// !methods in object
// entries
// values
// keys , seal , freeze , create , assign
// let obj = {
//         name:"Bharath",
//         age:23,
//         company:"Google",
//         sal:98769,
//     };
    // console.log(Object.entries(obj))
    // console.log(Object.keys(obj));
    // console.log(Object.values(obj));
    // Object.seal(obj);
// Object.freeze(obj);
//     console.log(obj.name)
//     obj.desig="Dev";
//     delete obj.sal;
//     obj.age=30;
//     console.log(obj);

// let x = Object.create(null);
// x.name="Sam"
// console.log(x);
// let obj = {
//             name:"Bharath",
//             age:23,
//             company:"Google",
//             sal:98769,
//         };
// let x = Object.create(obj);
// x.name="abc"
// console.log(x)

// let target ={
//     name:"abc"
// };
// let source={
//     a:1,
//     b:2,
//     c:3
// }
// let x = Object.assign(target , source);
// console.log(x);

// !JSON
// JSON.stringify()
// JSON.parse()

// let obj = {
//             name:"Bharath",
//             age:23,
//             company:"Google",
//             sal:98769,
//         };
//         console.log(obj);
//        let x = JSON.stringify(obj);
//        console.log(x);
//        let y = JSON.parse(x);
//        console.log(y);


// !local storage and session storage
// console.log(localStorage.length);
// localStorage.setItem("username","Bharath");
// localStorage.setItem("company","Qsp");
// localStorage.setItem("desig","Trainer");
// localStorage.setItem("city","Bengaluru");

// let x =localStorage.getItem("userName");
// console.log(x);

// // localStorage.removeItem("company")
// // localStorage.clear();
// // console.log(localStorage.length)
// console.log(localStorage.key(0))
// console.log(localStorage.key(2))

// sessionStorage.setItem("username","Bharath");
// sessionStorage.setItem("company","Qsp");
// sessionStorage.setItem("desig","Trainer");
// sessionStorage.setItem("city","Bengaluru");

// console.log(sessionStorage.getItem("city"))
// // sessionStorage.removeItem("company")
// // sessionStorage.clear();
// // console.log(sessionStorage.length)
// console.log(sessionStorage.key(1));

// !DOM
// let ele = document.getElementById("demo");
// // ele.innerText = "ReactJS";
// ele.innerHTML = "<h1>ReactJS</h1>"
// console.log(ele)

// let elements = document.getElementsByClassName("test");
// console.log(elements[4]);
// console.log(elements[0].style)
// elements[0].style.color="yellow"
// elements[0].style.fontSize="30px"
// console.log(Array.isArray(elements))
// let x = Array.from(elements);
// x.map((ele)=>{
// console.log(ele)
// ele.style.color="red"
// ele.style.fontWeight="900"
// })

// let elements = document.getElementsByTagName("div");
// console.log(elements)

// let ele = document.getElementsByName("inpValue");
// console.log(ele)

// let ele = document.querySelector("#demo");
// console.log(ele)
// let ele = document.querySelectorAll(".test");
// console.log(ele)

// !events
// let ele = document.getElementById("demo");
// // ele.addEventListener("click" , ()=>{
// //     console.log("clicked")
// //     document.body.style.background="yellow"
// // })

// ele.addEventListener("mouseover" , ()=>{
//     document.body.style.background="yellow"
// })
// ele.addEventListener("mouseleave" , ()=>{
//     document.body.style.background="tomato"
// })

// let form =document.querySelector("form");
// let inp1 = document.getElementById("inp1");
// let inp2 = document.getElementById("inp2");
// let inp3 = document.getElementById("inp3");
// let inp4 = document.getElementById("inp4");
// form.addEventListener("submit",event=>{
//     // console.log(event);
//     event.preventDefault();
//    let username =inp1.value;
//    let mail = inp2.value;
//    let pass=inp3.value;
//    let phone = inp4.value;
// //    console.log({username , mail , pass , phone})
// let userDetails={
//     username :username,
//      mail :mail,
//       pass :pass, 
//       phone:phone
// }
// let data = JSON.stringify(userDetails)
// localStorage.setItem("userData",data)
// })


// !Asynchronous method
// setTimeout(()=>{
// console.log("Hello")
// },3000)
// setInterval(()=>{
//     console.log("Hello")
//     },3000)
// console.log(10)
// console.log(20)
// setTimeout(()=>{
//     console.l0g(30)
// })
// console.log(40)
// console.log(50)


// !Promise
// let p = new Promise((resolve , reject)=>{});
// console.log(p);
// !promise states
// let p1 = new Promise((resolve , reject)=>{
  
// });
// // console.log(p1);
// p1.then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("finally"))

// let p2 = new Promise((resolve , reject)=>{
//     resolve("promise completed")
// });
// p2
// .then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("finally"))
// // console.log(p2);

// let p3 = new Promise((resolve , reject)=>{
//     reject("promise rejected")
// });
// p3.then(data=>console.log(data))
// .catch(err=>console.log(err))
// .finally(()=>console.log("finally"))
// console.log(p3);
// !static methods
// ~ all , any , race , allSettled

// function fetchUsers(){
//     let data = fetch("https://api.github.com/users");
//     // console.log(data)
//     data.then(res=>{
//         // console.log(res.json())
//         return res.json()
//     })
//     .then(res=>{
//         console.log(res)
//         let store=document.getElementById("store");
// res.map(user=>{
//     store.innerHTML += `
//     <img src=${user.avatar_url}/>
//     `
// })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers()

// !async and await

// let p  = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("promise is resolving...")
//     },5000)
// })

//  async function demo(){
//     console.log("hello");
//     let x =await p;
//     console.log(x);
//     console.log("finished")
// }
// demo()



