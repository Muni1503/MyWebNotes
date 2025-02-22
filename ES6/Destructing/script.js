
//!Destructuring

//?Array and object destructuring

//Destruction makes the assignment of the values of an array or object to the new variable easier.

//For example in older version
const contacts={
    name:"rao",
    age:"21"
}

// let name=contacts.name;
// let age=contacts.age;

// console.log(name);
// console.log(age);

//?output
//rao
//21

//?consider the object has two entries so it is easy consider whether it has more entries then it will be difficult

//New version introduced in Es6
// const{name,age}=contacts;
// console.log(name);//rao
// console.log(age);//21

//!Note
//if you assign a variable that is not identical to the name of property, it will return undefined. 
//For example, if the name of the property is name and we assign it to a username variable, it will return undefined.

//what when we want to rename the variable we can use colon(:)

const{name:userName}=contacts;// we can also destruct what value we want no need for giving age
//console.log(name);//this will throw an error name is not defined because name is renamed as userName
console.log(userName)//rao

const{name:userName1,age}=contacts;
console.log(userName1);//rao
console.log(age);//21


//!For Arrays
//For the array, we use the same syntax as the object. We have just to replace the curly brackets with square brackets.

const Arr=[1,2,4,5];

const[value1,value2,value3,value4]=Arr;

console.log(value1)//1
console.log(value2)//2
console.log(value3)//4
console.log(value4)//5
