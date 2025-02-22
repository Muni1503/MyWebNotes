var user={
    firstName:"muni",
    lastName:"rao",
    role:"admin",
    isHeLoggedIn:true,
    loggedCount:32,
    courseList:[],
    buyCourse:function(courseName){
        this.courseList.push(courseName);//here this is refering to an user..to access //an courselist insude object we use an this keyword
        },
    getCourseCount:function () {
        return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
        
    },
    info:function(){
        return`${this.firstName} ${this.lastName} is a ${this.role} and isHeLoggedIn ${this.isHeLoggedIn} and he enrolled in ${this .courseList}`
    }
    
};

console.log(user.getCourseCount());

user.buyCourse("react course");

console.log(user.getCourseCount());//without paranthesis at last it act as an reference

console.log(user.courseList);

console.table(user.info());

console.table(user);