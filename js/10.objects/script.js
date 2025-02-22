
//!what is object

//An object is a collection of related data and/or functionality. 
//These usually consist of several variables and functions (which are called properties and methods when they are inside objects).
//Inside object we have key-value pairs
//Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon.
// The syntax always follows this pattern:
//  ?const objectName = {
   //? member1Name: member1Value,
  // ?member2Name: member2Value,
  //? member3Name: member3Value,
//  ? };

//?creating an empty object
//const person={};

//console.log(person)//{}

//?creating an object with data
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

  //?in object we can any data for examples integer,float,string,array,function,another object like these


//!some functionalities
name=person.name;
console.log(name)//[ 'Bob', 'Smith' ]

console.log(person.name[0]);//bob

console.log(person.age);//32

person.bio()//Bob Smith is 32 years old.

person.introduceSelf()//Hi! I'm Bob.

// !When the object's members are functions there's a simpler syntax. Instead of bio: function () we can write bio(). Like this:

const person1 = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };

//?An object like this is referred to as an object literal 
//?This is different compared to objects instantiated from classes, which we'll look at later on.

//It is very common to create an object using an object literal when you want to transfer a series of structured, 
//related data items in some manner, for example sending a request to the server to be put into a database. 
//Sending a single object is much more efficient than sending several items individually, and 
//it is easier to work with than an array, when you want to identify individual items by name.


//!Dot notation
//?you accessed the object's properties and methods using dot notation

const person2 = {
    name: {
      first: "Muni",
      last: "Rao",
    },
    
  };

console.log(person2.name.first);//Muni
console.log(person2.name.last); //Rao

//!Bracket Notation

//Bracket notation provides an alternative way to access object properties. Instead of using dot notation

console.log(person["age"]);
console.log(person["name"]["first"]);

//This looks very similar to how you access the items in an array, and it is basically the same thing — instead 
//of using an index number to select an item, you are using the name associated with each member's value. 

//It is sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.

//Dot notation is preferred over bracket notation because it is more easy to read

//?However there are some test cases where you have to use square brackets
//For example, if an object property name is held in a variable,means in function we are passing variable like that
//and integers keys cannot be called with dot notation

const person4={
    name:"rao",
    age:21,
    1:true,
    
}
//?console.log(person4.1);//using dot we can't access integer keys

//?1st way where we cant use Dot notation
//instead use another method
console.log(person4[1]);

//?2nd where we   cant use Dot notation(in functions)
function logProperty(propertyName) {
    console.log(person4[propertyName]);
  }
  
  logProperty("name");//rao
  logProperty("age");//21



//!setting object members
//?we can also set (update) the value of object members by declaring the member you want to set (using dot or bracket notation)  

person4.name="Achu";//achu will be the return value of this
person4[1]=false;

console.log(person4.name);//Achu
console.log(person4[1]);//false


//?we can also create completely new members. 

person4["eyes"] = "hazel";
person4.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person4)

//?output
// {
//     '1': false,
//     name: 'Achu',
//     age: 21,
//     eyes: 'hazel',
//     farewell: [Function (anonymous)]
//   }


//One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too.
//Assume that we are getting input from form

const myDataName = "height";
const myDataValue = "1.75m";

person4[myDataName]=myDataValue;

console.log(person4.height);//1.75m

//Adding a property to an object using the method above isn't possible with dot notation, 
//which can only accept a literal member name, not a variable value pointing to a name.

//!Delete the element

console.log(person1)
delete person1.age;
console.log(person1);//see the age is deleted
console.log("**************************************************************************************")

                               //!methods of object

let obj5={
  name:"abc",
  age:10,
  marks:[45,76,99],
  isActor:false
}

                     //!1.Object.keys()

let keys=Object.keys(obj5);
console.log(keys);//it will return array //?[ 'name', 'age', 'marks', 'isActor' ]
                     //!2.Object.values()

let values=Object.values(obj5);
console.log(values) ;//?[ 'abc', 10, [ 45, 76, 99 ], false ]    

                     //!3.Object.entries()
let entries=Object.entries(obj5);
console.log(entries);   

//?output
// [
//   [ 'name', 'abc' ],
//   [ 'age', 10 ],
//   [ 'marks', [ 45, 76, 99 ] ],
//   [ 'isActor', false ]
// ]

                     //!4.Object.fromEntries(entries)
//Here we are passing array of arrays (the output we get from entries method) 

let obj6=Object.fromEntries(entries)
console.log(obj6)//give object//?{ name: 'abc', age: 10, marks: [ 45, 76, 99 ], isActor: false }


                      //!5.Object.freeze()

                      //we cannot do addition or modify or delete

console.log("before freeze")
console.log(obj5);

Object.freeze(obj5);

//try changing the obj

obj5.age=18;
delete obj5.age

console.log("After freeze")
console.log(obj5);//age is 10 only//age also not removed

                                 //!6.Object.isFrozen()
 
//To check whether it is frozen or  not
console.log(Object.isFrozen(obj5))   //true

                               //!7.Object.seal()

//The same functional of freeze
//Here we can modify,but we cannot add and we cannot delete

let obj7={
  name:"abcde",
  age:18,
  marks:[85,96,99],
  isActor:true
}

console.log(obj7);//{ name: 'abcde', age: 18, marks: [ 85, 96, 99 ], isActor: true }

//sealing an object
Object.seal(obj7);

obj7.phno=23445566;//we cant add

delete obj7.age;//we cant delete

obj7.age=28;//we can modify

console.log("After seal")
console.log(obj7)//{ name: 'abcde', age: 28, marks: [ 85, 96, 99 ], isActor: true }

                                 //!8.Object.isSealed()

//To check whether it is sealed or not

console.log(Object.isSealed(obj7))//true

//check for the forzen one also

console.log(Object.isSealed(obj5))//true


                                   //!9.object_name.hasOwnProperty('key_name')

//It will  check whether the key is present or not

console.log(obj5.hasOwnProperty("age"));//true

console.log(obj5.hasOwnProperty("subject"));//false

                                    //!what is this

//The this keyword typically refers to the current object the code is being executed in
//In the case of an object method, this refers to the object that the method was called on.

const person5 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const person6 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };

person5.introduceSelf();//Hi! I'm Chris.
person6.introduceSelf();//Hi! I'm Deepti.

//In this case, person1.introduceSelf() outputs "Hi! I'm Chris."; person2.introduceSelf() outputs "Hi! I'm Deepti." 
//This happens because when the method is called, this refers to the object on which the method is called, 
//which allows the same method definition to work for multiple objects.

//? this will be essential when we start using constructors to create more than one object from a single object definition.

//!constructors

//?Using object literals is fine when you only need to create one object, but if you have to create more than one
//? We have to write out the same code for every object we create, and if we want to change some properties of the object - 
//?like adding a height property - then we have to remember to update every object.

//we have to define the shape of an object-the set of methods and properties it can have
//and create as many objects we want

//?The first version of this is just a function:
//?we are going to see how we would do using a function
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }

const rao=createPerson("rao");
const achu=createPerson("Achu");

rao.introduceSelf();//Hi! I'm rao.
achu.introduceSelf();//Hi! I'm Achu.

//?This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it.

//?A better way is to use a constructor
//?A constructor is just a function called using the new keyword. When you call a constructor, it will:

//1.create a new object
//2.bind this to the new object, so you can refer to this in your constructor code
//3.run the code in the constructor
//4.return the new object.

//?rules
//1.Constructors, by convention, start with a capital letter and are named for the type of object they create.

//?using constructor
function Person(name){
    this.name=name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}.`);
      };
}

const muni=new Person("Muni");
const ammu=new Person("Ammu");

muni.introduceSelf();//Hi! I'm Muni.
ammu.introduceSelf();//Hi! I'm Ammu.


//!we have been using the objects all along

let string1="rao";
string1.split("");

//In above Example we were using a method available on a string object
// Every time you create a string in your code, that string is automatically created as an instance of String, 
//and therefore has several common methods and properties available on it.

//?document.createElement("div");
//?document.querySelector("video");

//when we are accessing dom,we were using the methods available on a document object
// For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure, 
//content, and other features such as its URL.
//it has several methods and properties available on it

//The same is true of pretty much any other built-in object or API you've been using — Array, Math, and so on.

//Note that built in objects and APIs don't always create object instances automatically. 
//As an example, the Notifications API — which allows modern browsers to fire system notifications — requires you 
//to instantiate a new object instance using the constructor for each notification you want to fire. 


//!for..in loop(give keys)

let obj9={
  name:"abc",
  age:10,
  marks:[45,76,99],
  isActor:false
}

for(let key in obj9){
  //console.log(key)
  console.log(obj9[key]);//?here we cannot use . notation
}

//!for..of loop(throw error)
// for(let ele of obj9){
//   console.log(ele)
// }//!err-obj9 is not iterable






