function init(){
    var firstName="Muni";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}

init();

console.log(firstName);// this will throw an error

//remember executable context closes when init function got over
//hence the firstName at line 11 doesnot know an value