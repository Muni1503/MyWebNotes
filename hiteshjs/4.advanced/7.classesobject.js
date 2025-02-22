// import user from "./6classes.js"

const user=require("./6classes.js");

const muni=new user("muni","email@gmaail.com");
console.log(muni.getInfo());

muni.enrollCourse("nodejs");

console.log(muni.getCoursesList());

