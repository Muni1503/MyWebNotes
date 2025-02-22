//inheritence keyword is acccessed by child ones
//it is accessed by using extends keyword

//static keyword is used in parent to keeep it private
//that means it cannot be accessed by child one

//super()is there which will take all the  properties of that function

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

     enroll(){
        return'you are enrolled in'
    }

}

class subAdmin extends user{

    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return 'i am an sub-admin'
    }

}

const tom=new subAdmin("rao","r@gmail.com");

console.log(tom.getAdminInfo());

console.log(tom.enroll());//this can be printe if we use static infront of enroll

console.log(tom.getInfo());//it will print undefined

//to do this we have to define a constructor inside subadmin class

//super method is to access all methods of constructor


