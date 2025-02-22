                       //!Object prototypes

//!what is prototypes

//?Prototypes are the mechanism by which JavaScript objects inherit features from one another

const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };

console.log(myObject);

//see here in myObject we have one data property ,city and one method greet()
//In myObject apart from city and greet() there are lots of other properties like

//? __defineGetter__
//? __defineSetter__
//? __lookupGetter__
//? __lookupSetter__
//? __proto__
//? city
//? constructor
//? greet
//? hasOwnProperty
//? isPrototypeOf
//? propertyIsEnumerable
//? toLocaleString
//? toString
//? valueOf

//Try accessing one of them

console.log(myObject.toString());//[object Object]

//?Even thouugh we don't what does to string do for now but we see it works

//!What are these extra properties, and where do they come from?

//?Every object in JavaScript has a built-in property, which is called its prototype. 
//?The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. 
//?The chain ends when we reach a prototype that has null for its own prototype.



//?When you try to access a property of an object: if the property can't be found in the object itself, 
//?the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched,
//? and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.





                             //!shadowing properties
//?What happens if you define a property in an object, when a property with the same name is defined in the object's prototype?
// Let's see:    

const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'

//when we call getTime()the browser first looks in myDate for a property with that name  and only 
//checks the prototype if myDate does not define it

//So when we add getTime() to myDate, then the version in myDate is called.

//?This is called "shadowing" the property.


                        //!setting a prototype

//?There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: 
//1.Object.create() 
//2. constructors.

//?object.create()
const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const car2 = Object.create(personPrototype);
  car2.greet(); // hello!
  
  //if we create like this prototype is created for car2 object 
  //Here we create an object personPrototype, which has a greet() method. We then use Object.create() to create a new object
  // with personPrototype as its prototype. Now we can call greet() on the new object, and the prototype provides its implementation.

//!OwnProperties

//Properties that are defined directly in the object, like name here, are called own properties, 
//and you can check whether a property is an own property using the static Object.hasOwn() method:

console.log(Object.hasOwn(myObject,"city"));//true

console.log(Object.hasOwn(myObject,"greet"));//true

console.log(Object.hasOwn(myObject,"toString"));//false

//Lets check for car2 we have created prototype,whether it is a owned property or not

console.log(Object.hasOwn(car2,"greet"));//false

//look at this even though we have created the greet functionn but we are setting it in object prototype so it is false


//!prototypes and inheritance

//Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.
//In particular they support a version of inheritance




