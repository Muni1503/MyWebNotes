//allow the user to purchase
//only if his login is successfull
//email is verified
//card is true


//&&(and) and ||(or) operator

var isHeLoggedIn=true;
var emailVerified=true;
var card=true;

if(isHeLoggedIn && emailVerified && card){
    console.log("you are allowed to purchase");
}else{
    console.log("you are not allowed to purchase");
}





//ASSIGNMENT - 2

//user login whether he can login from google,email and facebook

var email=true;
var facebook=false;
var google=false;

if(email || facebook || google){
    console.log("you are logged in");
}else{
    console.log("your login is not successfull");
}