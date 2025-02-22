//for api calling arrays are most important topic along with loops and objects

//Array is just an collection of data

//array declaration
var countries=["india","usa","japan","netherlands"];

//another way to create array is with new keyword..it is an object oriented approach
var states=new Array("TN","AP","ND");

console.log(states);
console.log(states[0]);

console.log(countries[1]);

//we have access to many methods in array
console.log(states.length);//This will give the length of an array

//replacing an value in an array
states[0]="Tamil nadu";

console.log(states);

//we can store multiple datatype in an single but it is not a good practice..we can store 
//multiple datatypes in an object..but still we can store them.

var user=["Muni","Muni@gmail.com",3,34,true];
console.log(user);

//pop is used to remove the last element
//if we use pop two times then two elements removed from last
//push is used to add element at last ..

user.push("Ice");
console.log(user);

user.pop();
user.pop();
console.log(user);

//shift is used to remove the element at first
//unshift is used to add a value at first

user.unshift("Ice");
console.log(user);

user.shift();
user.shift();
console.log(user);

//indexOf -it is used to find position of elemeent in array

console.log(user.indexOf(34));

//if we will ask for and element that is not in the array it will return -1

console.log(user.indexOf("rao"));

//there is a method called from
//which is used to convert anything (eg.string,sets,etcc) into an array

console.log(Array.from(11));//return an empty bracket
console.log(Array.from("RAO"));