// class factorialOdd{
//     public static int[] factorial(int n){
//         int[]res=new int[n];
//         for(int i=0;i<n;i++){
//             res[i]=i+1;
//         }
//         return res;
//     }
//     public static void main(String[] args) {
//         int sum=0;
//        int [] arr=factorial(10);
//        for(int i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//             sum+=arr[i];
//         }
//        }
//        System.out.println(sum);
//     }
// }

import java.util.Arrays;

class program3{
    public static void main(String[] args) {
        int val=5;
        int[]res=new int[10];
        res[0]=6;
        for(int i=1;i<res.length;i++){
            if((val+i+1)%2==0){
                res[i]=(val+i+1+2);
            }
            else{
                res[i]=(val+i+1)+res[i-1];
            }
        }
        System.out.println(Arrays.toString(res));
    }
    


    
    
    
}
