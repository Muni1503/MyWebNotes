const uid="abc123";

var fullName="Munirao";
var age=18;
var isLoggenIn=false;
var password="Muni123";
var confirmPassword="Muni123";
var courseCount=3;

console.log(uid);
console.log("The fullname is :"+fullName);


console.log(`
with an userid:${uid}
user's age:${age}
and his coursecount is :${courseCount}

`);//this method is known as interpolation


//we can also get input by using prompt

//fullName=prompt("enter your name");



//assignment

const unid="123ert";

var firstName="Muni";
var lastName="rao";
var country="india";
var state="TN";
var isHeLoggedInFacebook=true;

console.log(`
an employee with id:${unid}
his firstname is:${firstName} and his last name is:${lastName}
his country is =${country}
and he belongs to :${state}
ishelogged in through facebook:${isHeLoggedInFacebook}
`)

//  var lname=prompt("enter your lname");
// console.log(lname);
//prompt is not work in node
//it can be only used in webb browser

//instead of prompt it is used
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your last name: ', (lname) => {
  console.log(lname);
  rl.close();
});