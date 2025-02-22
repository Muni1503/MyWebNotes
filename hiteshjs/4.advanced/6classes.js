//classes are just like a blueprint
//we must create an constructor for class otherwise 
//class itself will create an empty object

// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     courseList=[];
//     getInfo(){
//         return{
//             name:this.name,
//             email:this.email
//         }
//     }

    

//     enrollCourse(name){
//         this.courseList.push(name)
//     }

//     getCoursesList(){
//         return this.courseList;
//     }


// }


// module.exports=user;

// const ice=new user("ice","ishu@gmail.com")
// console.log(ice.getInfo());
// ice.enrollCourse("python");
// console.log(ice.getCoursesList());
// console.log(ice.courseList);//look the two lines print the same output


//getter and setter
//getter is method  which helps us to grab some of the information from a private class

//setter is used to set some value which are private to the class

//private class are created with #before it {#couseList=[]}


class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList=[];//private class
    getInfo(){
        return{
            name:this.name,
            email:this.email
        }
    }

    

    enrollCourse(name){
        this.#courseList.push(name)
    }

    getCoursesList(){
        return this.#courseList;
    }


}


module.exports=user;

const ice=new user("ice","ishu@gmail.com")
console.log(ice.getInfo());
ice.enrollCourse("python");
console.log(ice.getCoursesList());
console.log(ice.courseList);//it will print undefined

//because private class only has acces to get the reference by method
//with direct access it will print undefined

