//creating an object each time is an difficult one..
//consider one as learncodeonline when user signup we need to know his firstName,lastName,courseCount etc
//for this we create an prototype

//while naming prototype starting letter should be recommended to use in uppercase

//functional object(defining an object in an functional way) is known as prototype

var User=function(firstName,courseCount){
    this.firstName=firstName;
    this.courseCount=courseCount;
    this.getCourseCount= function(){
        console.log(`courseCount is ${this.courseCount}`);
    };
};

//prototype is a bit similar to class in java(blueprint)..but not exactly same

//new keyword is verymuch important in calling functional objects..
//if we are not using then it is an regular function call then it will return emptyarray(globalcontext)

var muni=new User('Muni',4);
muni.getCourseCount();
console.log(muni);

var ice=new User('iswarya',7);
ice.getCourseCount();
console.log(ice);

//new is not only used to call an object but it has many more advantages
//it is responsible for invoking the constructor and creating an unique instance every single time

//prototype or __proto__ 
//it is an thing which isused to create something outside the object bbut it act as an that it's 
//inside the object

User.prototype.getFirstName=function(){
    console.log(`firstname is ${this.firstName}`);//look this due to prototype we can access this
}

muni.getFirstName();//calling is also same as calling an element inside object

//better way of writing above code to avoid undefined(when firstName is not defined)
//we use an proto property hasOwnProperty

if(muni.hasOwnProperty("firstName")){
    muni.getFirstName();

}
