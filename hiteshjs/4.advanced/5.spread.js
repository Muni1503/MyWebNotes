//spread operator

// var returnedValue=Math.max(1,4,6,7,3,8,2,9);
// console.log(returnedValue);

// var myObj={}

// Object.assign(myObj,{a:1,b:2},{c:3,D:4});

// console.log(myObj);
//understand the above two examples
//1 needs nothing
//second one needs one obj to store these values or may be an empty object

// function sumOne(a,b){
//         console.log(a+b);
// }

// sumOne(4,5);

// //for example consider an array
// const myA=[1,2]
// sumOne(myA);//1,2 undefined as output

// //in this case spread operator comes into play
// //it spreads array into individual ones(not only array a group objects also)

// sumOne(...myA);





//rest operator

//rest operator is an opposite of spread operator
//it groups the individual ones into groups like array and objects

// function sumTwo(...args){
//     console.log(args);
//     let sum=0;
//     for (const arg of args){
        
        
//         sum=sum+arg;

        
//     }
//     return sum
        
//     };
// console.log(sumTwo(1,1,1,2,3,4));

//for example if you want to multiply first two numbers and then add

function sumTwo(a,b,...args){
    console.log(args);
    var m=a*b;
    let sum=0;
    for (const arg of args){
        
        
        sum=sum+arg;

        
    }
    return [m,sum];
        
    };
console.log(sumTwo(1,1,1,2,3,4));

