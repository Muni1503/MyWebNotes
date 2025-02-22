//for loop
//general syntax

// for(let i=0;i<10;i++){
//     console.log(i);
// }

var myStates=["Tamilnadu","Andhra","delhi","assam",1947,"rajasthan","patna"]

// for(let i=0;i<=myStates.length-1;i++){
//     console.log(myStates[i]);
// }

//usage of break and continue 
//continue keyword start continue looping without executing the below line if condition not satisfies it will execute below line
//break keyword allows us to cut when condition is false

for(let i=0;i<=myStates.length-1;i++){
    if(typeof myStates[i]=="string")continue
    console.log(myStates[i]);
}//output will be 1947 only


for(let i=0;i<=myStates.length-1;i++){
    if(typeof myStates[i]!=="string") break;
    console.log(myStates[i]);
}

//usage of let in for loop is for once after completion of executing for loop let memory got free
//we can declare same let i=0; after that it creates no problem..




//while loop

// let i=0;

// while(i<myStates.length){
//         console.log(myStates[i]);
//         i++;
// }

//dowhile loop-special scenario that it would work atlease once if the condition is false

let i=20;

do{
        console.log([i]);
        i++;
}while(i<10)

