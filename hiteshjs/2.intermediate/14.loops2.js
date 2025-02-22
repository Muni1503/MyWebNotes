//forEach
//forEeach loop is technically considered as not a loop but as a method on the array

//interview question

//var i=0;

// for(;;){
//     if(i>3) break;
//     console.log(i);
//     i++;
// }//output will be 0,1,2,3

// var myStates=["Tamilnadu","Andhra","delhi","assam",1947,"rajasthan","patna"];

// myStates.forEach((s)=>(console.log(s)));


//for in and for of loops

//for of is majorly used for an array(not an compulsion but majorly used for an array)

var names=["muni","rao","ammu","ice","chechi"];

for (const n of names){
    console.log(n);
}

//for in loop is mostly for objects

var symbol={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",
    wp:"whatsapp"
}


for(const n in symbol){
    console.log(n);//this will print keys
}

for(const n in symbol){
    console.log(`keys are:${n} and values are:${symbol[n]}`);//this will print keys and symbol[n] print values
}





