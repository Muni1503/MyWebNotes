//!oops and javascript

//?we looked at a couple of core JavaScript features: constructors and prototypes. 
//?These features certainly have some relation to some of the OOP concepts described

//constructors in JavaScript provide us with something like a class definition, enabling us to define the "shape" of an object, 
//including any methods it contains, in a single place. But prototypes can be used here, too. 
//For example, if a method is defined on a constructor's prototype property, then all objects created using that 
//constructor get that method via their prototype, and we don't need to define it in the constructor.

//the prototype chain seems like a natural way to implement inheritance.
// For example, if we can have a Student object whose prototype is Person, then it can inherit name and override introduceSelf().


//!Classes and constructors

//?You can declare a class using the class keyword.
//creating a class

class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }
  
  
//a name property.
//a constructor that takes a name parameter that is used to initialize the new object's name property
//an introduceSelf() method that can refer to the object's properties using this.

//The name declaration is not required because the constructor will create the name property before initializing it

//You could also initialize the property to a default value when you declare it, with a line like name = '';.In above person class
//name is not initialized 

//The constructor is defined using the constructor

//?It will
// create a new object
// bind this to the new object, so you can refer to this in your constructor code
// run the code in the constructor
// return the new object.

//!creating an instance(object) for above class

const giles = new Person("Giles");//constructor call

giles.introduceSelf(); // Hi! I'm Giles

//?omitting constructors

//If you don't need to do any special initialization, you can omit the constructor, 
//and a default constructor will be generated for you

//?consider the below Example

class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
  }
  
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'

//!Inheritance
//Given our Person class above, let's define the Professor subclass. 

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(`The ${paper} grade is ${grade}`);
  }
}

//We use the extends keyword to say that this class inherits from another class.

//The Professor class adds a new property teaches, so we declare that

//The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

//The first thing this constructor does is call the superclass constructor using super() passing up the name parameter. 
//The superclass constructor takes care of setting name. After that, the Professor constructor sets the teaches property.

//?We've also overridden the introduceSelf() method from the superclass, and added a new method grade(), 
//?to grade a paper (our professor isn't very good, and just assigns random grades to papers).

const san=new Professor("santanu","Javascript");
san.introduceSelf();//My name is santanu, and I will be your Javascript professor.

san.grade("react");//The react grade is 4


//!Encapsulation in javascript

//Finally, let's see how to implement encapsulation in JavaScript.
//create a student subclass of person

class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

//In the above code ,#year is a private property
//we can construct student object and it can use #year internally
//but if code outside the object tries to access #year the browser throws an error:

const rao=new Student("Muni",4);

rao.introduceSelf(); //Hi! I'm Muni, and I'm in year 4.
console.log(rao.canStudyArchery());//true

console.log(rao.year);//undefined
//console.log(rao.#year);//error //?Private field '#year' must be declared in an enclosing class

//?Private data properties must be declared in the class declaration, and their names start with #.

//?private methods
//You can have private methods as well as private data properties. 
///Just like private data properties, their names start with #,
// and they can only be called by the object's own methods:

class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

//myExample.#somePrivateMethod(); // SyntaxError//? Private field '#somePrivateMethod' must be declared in an enclosing class






  

