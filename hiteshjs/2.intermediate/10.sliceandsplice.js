var sisters=["akka","ammu","ice","chechi","narmada","priya","abi"];
console.log(sisters);
//slice is used to take a particular part and create an array of those elments

console.log(sisters.slice(1,2));//ammu

//in case of only single value it only takes start point
console.log(sisters.slice(2));//end point is the last element of array

//splice
//splice takes starting point and second parameter is delete count
//it takes out that value and if specified it will insert the values..

// sisters.splice(1,3);
// console.log(sisters);

// sisters.splice(1,3,"csesisters");
// console.log(sisters);

sisters.splice(1);//count is full array
console.log(sisters);


//slice will create a new array and splice will modify the array

