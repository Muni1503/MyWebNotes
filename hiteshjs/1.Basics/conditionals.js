//conditionals like if and else works on boolean value

var temperature;

//Todo=go to google and get some data

temperature=19;

if(temperature<20 ){
    console.log("It's cold outside");
}

if(temperature<30 && temperature>20){
    console.log("It's moderate outside");
}else{
    console.log("It's hot outside");
}//it will print the first if loop andf then it will also print else statement
//because it will consider it as two different loops

//solution(use of else if)

console.log("After using else if");
if(temperature<20 ){
    console.log("It's cold outside");
}

else if(temperature<30 && temperature>20){
    console.log("It's moderate outside");
}else{
    console.log("It's hot outside");
}