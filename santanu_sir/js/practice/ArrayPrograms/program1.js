let arr=[1,2,3,7,9,11,17];
let k=10;

let res=[]
let divRes=[]
for(let i=0;i<arr.length;i++){
    //inres=[]
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==k){
        //inres.push(arr[i]);
        //inres.push(arr[j]);
        res.push([arr[i],arr[j]]);
        }
        //if it is divisible by 10
        if((arr[i]+arr[j])%10==0){
            divRes.push([arr[i],arr[j]])
        }
    }
    
}
console.log(res)
console.log(divRes);