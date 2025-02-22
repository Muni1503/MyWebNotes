
//!loops

//Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop,
// or the same code will run but with different variables.


//!looping through a collection
//The basic tool for looping through a collection is the for...of loop:

const cats=["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"]

for(let cat of cats){
    console.log(cat);
}

//map filter and reduce are some higher function which is used to loop the collection'
console.log("**************************************************************************************************");

//?------------------------------------------------------------------------------------------------------------------------------

//!The standard for loop

//?syntax

/*for (initializer; condition; final-expression(updater function)) {
     // code to run
   }*/

//?Example
for(let i=0;i<10;i++){
    console.log(i)
}

const cats1 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats1) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
console.log("**************************************************************************************************");

//?----------------------------------------------------------------------------------------------------------------------------------

//!Exiting the loop

//==>If you want to exit a loop before all the iterations have been completed, you can use the break statement

for(let i=0;i<100;i++){
  console.log(i);
  if(i===5){
    break;
  }
}

console.log("**************************************************************************************************");

//?--------------------------------------------------------------------------------------------------------------------------------

//!skipping iterations

//The continue statement works similarly to break, but instead of breaking out of the loop entirely, 
//it skips to the next iteration of the loop.

for(let i=0;i<5;i++){
    
    if(i===0){
        continue
    }
    console.log(i)
    
}
console.log("******************************************************************************************************");

//?------------------------------------------------------------------------------------------------------------------------------

//!while loop

//This works in a very similar way to the for loop, except that the initializer variable is set before the loop, 
//and the final-expression (updater value) is included inside the loop after the code to run, rather than these two items being included
// inside the parentheses. The condition is included inside the parentheses, which are preceded by the while

let j=0;

while(j<10){
    console.log(j);
    j++;
}
console.log("*******************************************************************************************")


//!do while

//The do...while loop is very similar, but provides a variation on the while structure:

//The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed 
//at least once. That's because the condition comes after the code inside the loop.

let Z=2;
do{
    console.log(Z);l
    Z++;
}while(Z<2)//condition is false but it executes once

//?---------------------------------------------------------------------------------------------------------------------------------

//!D/B while and dowhile

//The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed 
//at least once. That's because the condition comes after the code inside the loop.

//The minimum iteration count in dowhile is 1
//In while the minimum iteration count is 0











