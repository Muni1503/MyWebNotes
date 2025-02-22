console.log('hi');

// Number Datatype

let a=10;

console.log(a);
console.log(typeof(a));

let b=10.7;
console.log(b);
console.log(typeof(b));

//Boolean 

let isPlayer=true;

console.log(isPlayer);
console.log(typeof(isPlayer));

let isStudent=false;

console.log(isStudent)
console.log(typeof(isStudent));

// 3.String
let str1='I am String 1';
console.log(str1);
console.log(typeof(str1));

let str2="I am string 2";
console.log(str2);
console.log(typeof(str2));

let str3=`I am string 3.\nA value is:${a}`;
console.log(str3);
console.log(typeof(str3));

//4.null
let sir='santanu';
let sal_of_sir=null;

console.log(sal_of_sir);
console.log(typeof sal_of_sir); //object
//The datatype for an null is object

//5.undefined
let name;

console.log(name);//undefined
console.log(typeof name);//undefined

//6.BigInt

let num=98765432100987654323456789009876543234567890098765456789;
console.log(typeof num);//number

//only suffixed with n it is considered as BigInt

let num2=20n;

console.log(num2);//20n
console.log(typeof num2)//bigint

let num3=BigInt(20);
console.log(num3)//20n
console.log(typeof num3);//bigint

let num4=Number("4");
console.log(num4);//4
console.log(typeof num4);//number




