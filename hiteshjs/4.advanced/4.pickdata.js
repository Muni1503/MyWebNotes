//how to pick the data
//this is most common skill which is also known as destructing

//destructing is happen at lot of places and is the most common technique used in js
//whatever the datatype on the R.H.S should be similar to the datatyoe on L.H.s then we can able to do destructuring

//for array

// const user=["muni",3,"admin"];

//if you want to store the values in a variable

// var firstName=user[0];
// var role=user[2];

// console.log(role);

//instead of doing above lines

// var[firstName,courseCount,role]=user;

// console.log(role);

//for objects also same

const user={
    name:"muni",
    courseCount:5,
    role:"admin",
}


// console.log(user.role);

//instead of the above line

var{name,courseCount,role}=user;
console.log(role);
console.log(name);
