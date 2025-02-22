// ! How to declare String


                                       // ! by literals
let str1 = 'this is string1'
console.log(str1)
console.log(typeof str1)
let str2 = "this is string2"
console.log(str2)
console.log(typeof str2)
let str3 = `this is string3`
console.log(str3)
console.log(typeof str3)

// ! how to know the length of the string
let str4 = 'hello how are you'
console.log(str4.length) // length is the property of String
console.log('-------------------------------------------------------')
// ! String Methods
// ! 1. toUpperCase()
let str5 = 'hello'
let upperStr =str5.toUpperCase()
console.log(upperStr) // output : HELLO
console.log(str5) // output : hello
console.log('---------------------------------------------')
// ! 2. toLowerCase()
let str6 = "HELLO"
let lowerStr = str6.toLowerCase()
console.log(lowerStr) // output: hello
console.log(str6) // output: HELLO
console.log('--------------------------------------------------')

// ! 3. includes()
let str7 = 'hello how are you'
let isPresent = str7.includes('you') // output: true
console.log(isPresent)
console.log('----------------------------------------------')
// ! 4. stratsWith()
let str8 = 'hello good afternoon'
let isStarting = str8.startsWith('hello ') // output: false
console.log(isStarting)
console.log('-----------------------------------------------')

//! 5. endsWith()
let isEnding = str8.endsWith('noon') // output : true
console.log(isEnding)
console.log('----------------------------------------------')
// ! 6. charAt()
let char = str8.charAt(2)
console.log(char) // output: l
console.log('----------------------------------')
// ! 7. indexOf()
let index = str8.indexOf('o')
console.log(index) // output: it will give the index of the first 'o'
// if the character is not present it will give -1.
console.log('---------------------------------------')
// ! 8. lastIndexOf()
let lastIndex = str8.lastIndexOf('o')
console.log(lastIndex) // it will give the last occurance of the character
console.log('------------------------------------------')
// ! 9. concat()
let str9 = 'hello'
let str10 = "how are you"
let mergedStr = str9.concat(" ",str10,"?") // output: hello how are you?
console.log(mergedStr)
console.log('---------------------------------------')
// ! 10. replace()
let replacedStr = str9.replace('l',"*")
console.log(replacedStr) // output: he*lo
console.log('-------------------------------------------------------')

// ! 11. replaceAll()
let replacedStr2 = str9.replaceAll("l","*")
console.log(replacedStr2) // output : heo
console.log('---------------------------------------------------------')
let msg = " I am from chennai, I love chennai"
let replacedMsg = msg.replaceAll('chennai','bengal')
 // I am from bengal, I love bengal
console.log(replacedMsg)
console.log('---------------------------------------------------')
// ! 12. trim()
let str11 = ' hello '
console.log(str11)
console.log(str11.length) //output : 10
let trimmedStr = str11.trim()
console.log(trimmedStr)
console.log(trimmedStr.length) // output: 5
console.log("----------------------------------------------------")
// ! 13. trimStart()
let trimmedStr2 = str11.trimStart()
console.log(trimmedStr2)
console.log(trimmedStr2.length) // output: 8

console.log('---------------------------------------------------')
// ! 14. trimEnd()
let trimmedStr3 = str11.trimEnd()
console.log(trimmedStr3)
console.log(trimmedStr3.length) // output: 7
console.log('---------------------------------------------')

// ! 15. substr()
let str12 = 'hello how are you'
console.log(str12.substr(2,6)) // output: llo ho
console.log(str12.substr(2)) // output: llo how are you
console.log(str12.substr(-5)) // output: e you
console.log(str12.substr(-5,3)) // output: e y
console.log(str12.substr(-5,-3)) // output: blank/ empty
console.log('-----------------------------------------------------------')
// ! 16. slice()

console.log(str12.slice(2,8)) // output: llo ho
console.log(str12.slice(2)) // output: llo how are you
console.log(str12.slice(-5)) // output: e you
console.log(str12.slice(-5,-1)) // output: e yo
console.log(str12.slice(6,1)) //! not possible (endIndex should be greaterthan startIndex)
console.log('--------------------------------------------------------------')


// ! 17. substring()

console.log(str12.substring(2,8)) // output: llo ho
console.log(str12.substring(2)) // output: llo how are you
console.log(str12.substring(-5)) // output: hello how are you//if we give negative value it will covert to 0
console.log(str12.substring(6,1))//here we can give end index smaller than substring it is not possible in slice
console.log('-------------------------------------')

//!18.padstart()

let str13="hi";

let str14="MuniRao"

let padst=str13.padStart(6,"san");//it will accept two arguments 1.length after adding the string 2.string to be added at start
console.log(padst);//sanshi

console.log(str14.padStart(6,"V M"))//MuniRao
console.log(str14.padStart(10,"V M "))//V MMuniRao

//!19.padEnd()

let padEd=str13.padEnd(5,"hello");
console.log(padEd);//hihel

//!20.search()

let str15="hello, good afternoon";
console.log(str15.search("good"));//7---it will return the first index of the string
console.log(str15.search("V"));//-1 --( v is not present)

//!21.split()
let str16="good afternoon buddies";
let arr=str16.split(" ");
console.log(arr);//[ 'good', 'afternoon', 'buddies' ]

let arr1=str16.split("");
console.log(arr1);//['g', 'o', 'o', 'd', ' ','a', 'f', 't', 'e', 'r','n', 'o', 'o', 'n', ' ','b', 'u', 'd', 'd', 'i','e', 's']

//! declare string using string object (new keyword)

let strObj=new String("I am an string object");
console.log(strObj);//it will return an object-----{String: 'I am an string object'}

let strObj1=new String(" I am an string method");
let strObj2=new String(" I am an string method");

console.log(strObj1==strObj2);//false ---because two objects have two different object

//!22.valueOf()
//?it is used to convert the stringObj into normal string literal

let normalstr=strObj1.valueOf();

console.log(strObj1);
console.log(normalstr);//I am an string method

let num=1234;
let sum=0;
 while(num>0){
    let last=num%10;
    sum+=last;
    let div=Number(num /10);
    num=parseInt(div);
 }
 console.log(sum)

 //?program to find palindrome or not

// let string="issi" ;
// let i=0,j=string.length-1;
// let res="palindrome"

// console.log(string.charAt(1))

// while(i<j){
//     if(string.charAt(i)!=string.charAt(j)){
        
//         res="no palindrome";
//         break;
//     }
//     else{
//         i++;
//         j--;
//     }
// }
// console.log(res)

//!remove duplicates from string

let stri="AABCASDS"
let res="";

for(let i=0;i<stri.length;i++){
    if(!res.includes(stri[i])){
      res+=stri[i];
    }
}
console.log("remove duplicates from string")
console.log(res)