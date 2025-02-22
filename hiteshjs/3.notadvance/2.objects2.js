var User={
    name:"",
    getUserName:function(){
    console.log(`firstname is:${this.name}`);
    },
};

var hitesh=Object.create(User);
console.log(hitesh);

hitesh.name="Muni";
hitesh.getUserName();

//another way to do this (pretty weiered syntax)

var Muni=Object.create(User,{
    name:{value:"ice"},
    courseCount:{value:3},
})

Muni.getUserName();