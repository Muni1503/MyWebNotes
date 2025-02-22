const Muni={
    firstName:"muni",
    lastName:"Rao",
    role:"admin",
    courseCount:3,
    getInfo : function(){
            console.log(`
            FirstName is :${this.firstName}
            lastName is :${this.lastName}
            and ${this.firstName} enrolled in ${this.courseCount}
            he is an ${this.role}
            `)
    }

}

Muni.getInfo();

//For example consider the another user

const ice={
    firstName:"ice",
    lastName:"L",
    courseCount:4,
    role:"sub-admin"

}

//here there is not an method getinfo but we can use it by using bind keyword
//using bind keyword the this keyword in Muni refer to an ice

Muni.getInfo.bind(ice);

//bind just passes an reference we can print by either calling or storing it in an var

Muni.getInfo.bind(ice)();

//another way

var iceInfo=Muni.getInfo.bind(ice);
iceInfo();

//call function 
//call function is similar to bind but it will call a function directly

Muni.getInfo.call(ice);

//what if you think we print muni

Muni.getInfo();//it will also print the user


//some terminology in html
//<h1></h1>,aand aanything that start with < is known as element
//a text inside elements is known as text node Eg:<h1>Helo world</h1>
