//async,await,resolve ,reject

const uno=()=>{
    return "i am one";
}

const duos=()=>{
    return new Promise((res,rej)=> {
        setTimeout(()=>{
            res("i am two");
        },3000);
});
}//this will stay untill completion of this method

const tres=()=>{
    return"i am three"
}

const callMe =async ()=>{
    var letOne=uno();
    console.log(letOne);

    var letTwo= await duos();
    console.log(letTwo);

    var letThree=tres();
    console.log(letThree);


}
callMe();