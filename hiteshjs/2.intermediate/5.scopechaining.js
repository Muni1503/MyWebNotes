//we can ask help to a bigger guy than we but taking something from a guy 
// who is smaller than we is notcorrect

var name="Muni";

console.log(`line no 6 ${name}`);

function sayName(){
    var name="ice";
    console.log(`name at line 10 is ${name}`);

    function sayNameTwo(){
        console.log(`name at 13 line is ${name}`)
    }
    sayNameTwo();
}

sayName();

//see there the function sayNameTwo has no name declared hence it takes the name from the higher function..

//if that higher function also not declared name it will take from global context(eg:Muni)


