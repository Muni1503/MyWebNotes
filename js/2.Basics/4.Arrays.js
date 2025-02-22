//!creating an array

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];

//?we can store hetrogeneous elements in the array
const random = ["tree", 795, [0, 1, 2]];


//!Finding length of array
console.log(shopping.length); // 5

//!Accessing and modifying the array items

console.log(shopping[0]);
// returns "bread"

shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

//?Note that an array inside an array is called a multidimensional array

//Accessing an multidimensional array element
random[2][2];


// !Finding the index of item in the array
const birds = ["Parrot", "Falcon", "Owl","owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1 ---Because Rabbit is not present
console.log(birds.lastIndexOf("owl"));//3


//!adding items in the array
//?To add one or more items to the end of an array we can use push()

//?the return type of the push and unshift is the length of modified array

const cities = ["Manchester", "Liverpool"];
let lenofcity=cities.push("Cardiff");
console.log(lenofcity);//3//?the length of modified array
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

//?To add an one item or more items to the start of the array, use unshift():

const cities1 = ["Manchester", "Liverpool"];
cities1.unshift("Edinburgh");
console.log(cities1); // [ "Edinburgh", "Manchester", "Liverpool" ]

cities1.unshift("hi","hello");
console.log(cities1);//[ 'hi', 'hello', 'Edinburgh', 'Manchester', 'Liverpool' ]


// !Removing items

//?To remove the last item from the array, use pop().

const cities2 = ["Manchester", "Liverpool"];
// cities2.pop();
// console.log(cities2); // [ "Manchester" ]

//?The pop() method returns the item that was removed. To save that item in a new variable, you could do this:

const removedCity=cities2.pop();
console.log(removedCity)//Liverpool

//To remove the first item from an array, use shift():

const cities3 = ["Manchester", "Liverpool"];
// cities3.shift();
// console.log(cities3); // [ "Liverpool" ]

const shiftedCity=cities3.shift();
console.log(shiftedCity);//Manchester


// !splice method
//?using index we can remove the element
//?In this call to splice(), the first argument says where to start removing items, and the second argument 
//?says how many items should be removed. So you can remove more than one item:

//splice(startind,how_many items)

//?splice will return an array of removed items 

const cities4 = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
//cities4.splice(1,2);//[ 'Manchester', 'Carlisle' ]

//cities4.splice(1,1);//[ 'Manchester', 'Edinburgh', 'Carlisle' ]

//cities4.splice(1);//end index not removed it will take the end  //[ 'Manchester' ]

let spliced=cities4.splice(1,3);
console.log(spliced)//[ 'Liverpool', 'Edinburgh', 'Carlisle' ]

console.log(cities4)


// !Accessing every item

//?1.for...of statement:

//it will take all the elements

const birds1 = ["Parrot", "Falcon", "Owl"];

for (const bird of birds1) {
  console.log(bird);
}

//?for...in loop
//it will take the index
console.log("for....in loop")
for(const ind in birds1){
  console.log(ind)
  console.log(birds[ind])
}

//!map method
//?-- if we want to do same operation with every element in an array we use map method
//?-- it will return an new array old array remains unchanged

function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled); // [ 10, 4, 14, 12 ]
  console.log(numbers);//[ 5, 2, 7, 6 ]

//!filter method

//?Sometimes you'll want to create a new array containing only the items in the original array that match some test.
//? You can do that using filter().  

function isLong(city) {
    return city.length > 8;
  }
  const cities6 = ["London", "Liverpool", "Totnes", "Edinburgh"];
  const longer = cities6.filter(isLong);
  console.log(longer); // [ "Liverpool", "Edinburgh" ]
  
  //?Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array,
  //? passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.

//!strings to arrays

//?using split method

const data="Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

let cities7=data.split(",");
console.log(cities7);

//!arrays to string

//?using join method
let commaseparated=cities7.join(",");
console.log(commaseparated)//Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

let spaceSeparated=cities7.join(" ");
console.log(spaceSeparated);//Manchester London Liverpool Birmingham Leeds Carlisle

//? another way-toString()

//?With join() you can specify different separators, whereas toString() always uses a comma.

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger


//!reduce function
//?The reduce() method applies callback(accumulator, currentValue, currentIndex, array) for each value in the array for 
//?the purpose of reducing the list of items down to a single value.
//?The reduce function returns the final value returned by callback function.

//?If initialValue is specified, then callback is called with initialValue as the first parameter value 
//?and the value of the first item in the array as the second parameter value.

//?If initialValue is not specified, then callback's first two parameter values will be the first and second elements of the array.
//? On every subsequent call, the first parameter's value will be whatever callback returned on the previous call, 
//?and the second parameter's value will be the next value in the array.

//?If callback needs access to the index of the item being processed, or access to the entire array, 
//?they are available as optional parameters.

const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60


//!reduceRight()

//?same as reduce method but works in reverse order

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array1.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]

//!To know the length of the array
const arr1=[10,20,30,"string",8.6,20];

console.log(arr1.length);//5

//!To check whether the element is present or not

console.log(arr1.includes(20));//true

//!To find the occurence of the element

console.log(arr1.indexOf(20));//1

//!To know the last index of the element
console.log(arr1.lastIndexOf(20))//5

//!concat method

arr2=[1,2,3,4];
arr3=[4,5,6,7];

let combinedArray=arr2.concat(arr3);
console.log(combinedArray)//[
  //1, 2, 3, 4,
  //4, 5, 6, 7
//]


//!flat()

let arr5=[1,3,4,[67,90,90,[3,4,5,["hello","hi"]]]];

console.log(arr5)

let flatArr=arr5.flat(2)
console.log(flatArr)// 2 arrays only be flattened //?[ 1, 3, 4, 67, 90, 90, 3, 4, 5, [ 'hello', 'hi' ] ]

let flatArr1=arr5.flat(Infinity)
console.log(flatArr1)// n number of arrays flattened(that means every  nested array is flattened)//?[ 1, 3, 4, 67, 90, 90, 3, 4, 5, 'hello', 'hi' ]

//!reverse()

//?reverse will modify the original array
let arr4=[1,2,5,4,8,9];
console.log(arr4.reverse());//[ 9, 8, 4, 5, 2, 1 ]
console.log(arr4)//[ 9, 8, 4, 5, 2, 1 ]

//!join()
let str=arr4.join(",")
console.log(str)

//!slice()

let slicedArr=arr4.slice(1,4);//it will return an new array
console.log(slicedArr)//[ 8, 4, 5 ]

//!splice()

arr4.splice(1,3);//1 is start index ,3 is the length ,it will remove the elements
console.log(arr4);//[ 9, 2, 1 ]

arr4.splice(1,0,"hi");
console.log(arr4);//[ 9, 'hi', 2, 1 ]

arr4.splice(1,1,20,30,40,50);
console.log(arr4);//[9,20,30,40,50,2,1]

//!To check whether the variable array or not

console.log(Array.isArray(arr4));//true
console.log(Array.isArray("hi"));//false

//!creating an array using Array of method

let arr7=Array.of(7,8,9,10);
console.log(arr7);//[ 7, 8, 9, 10 ]

//!we can also create an array using new keyword
let arr8=new Array(2,3,4,5);
console.log(arr8);//[ 2, 3, 4, 5 ]

//!forEach (higher order method)

let arr9=[1,2,3,5,7,4,0,9,6];

arr9.forEach((ele,ind,arr)=>{
  console.log(ele,ind,arr);
});

//it is a higher order array method.it is not a loop
//it will return an elements
//the call back function in forEach can take three parameter element,index,array //?eg:ele







  