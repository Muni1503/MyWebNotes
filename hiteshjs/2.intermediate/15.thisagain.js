//this keyword
//for all regular function calls ,this refers to an window object ,global object..

console.log(this);

// var user={
//     firstName:"Muni",
//     lastName:"rao",
//     courseCount:4,
//     getCourseCount:function(){
//         console.log(this);
//     }
// }

// user.getCourseCount();//this is not a regular function call it is through an object

// function sayHello(){
//     console.log("hello");
// }

// sayHello();//this is an regular function call



var user={
    firstName:"Muni",
    lastName:"rao",
    courseCount:4,
    getCourseCount:function(){
        console.log(this);
        function sayHello(){
            console.log("hello");
            console.log(this);//this is not an call through object it is an regular function call
        }
        
        sayHello();
    },
}

user.getCourseCount();


