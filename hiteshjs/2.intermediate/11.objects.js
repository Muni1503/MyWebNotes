//objects is the spinal cord of the javascript

//api is more over look like object and definitely yes
//object are a group of key value pairs
//it can contain different datatypes

var user={
    firstName:"muni",
    lastName:"rao",
    role:"admin",
    isHeLoggedIn:true,
    loggedCount:32,
};

//accessing an object

console.log(user);

console.log(user.isHeLoggedIn);

//another way of denoting object
console.log(user['lastName']);

//update the count to 44

user.loggedCount=44;
console.log(user.loggedCount);

//we can tabulate the object

console.table(user);




