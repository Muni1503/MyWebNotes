//maps can work almost like oject but not an object

//creating a map

var myMap=new Map();

myMap.set(1,"Muni");
myMap.set(2,"Ice");
myMap.set(3,"Vanmathi");
myMap.set(4,"Ammu");

//for printing each value we use for of loop

for(key of myMap.keys()){
    console.log(key);
}

for(value of myMap.values()){
    console.log(value);
}

//for printing both key and values
for([key,value]of myMap){
    console.log(`key is ${key}and value is ${value}`)
}

//in for of key comes first and then value
//in for each value only comes first if we try to print key it will print value

myMap.forEach((v,k)=>console.log(`key is ${k} and the value is ${v}`))

//for deleting a entry in maps

myMap.delete(2);
console.log(myMap);


