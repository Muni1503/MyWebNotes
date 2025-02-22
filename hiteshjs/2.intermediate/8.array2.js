var isEven=(element)=>{
    // if(element%2===0){
    //     return true;
    // }
    // return false;

    //instead of writing all the above stuff we can write the following single line

    return element%2===0;//return keyword is important if we donot use it it will throw an error
}

console.log(isEven(3));


//call back function

//every keyword-it is a array method which will check every element in array 
//and return true if all of them are true

//reference-refering the function differ from calling the function

// var result=[2,4,6,8].every(isEven);
// console.log(result);

//callback function

var result=[2,4,6,8].every((e)=>{
        return e%2===0;
});
console.log(result);

//here the arrow function is the call back function
//if we are using curly braces {} then we must use return keyword to return something
//if we donot want to use return keyword then use the following syntax

var result=[2,4,6,8].every((e)=> e%2===0);
console.log(result);


