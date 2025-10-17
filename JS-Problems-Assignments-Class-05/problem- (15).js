// Problem 15: Find First Even Number
// let arr=[2,4,5,4,1,3,6,7,9];
// let even;
// for(num of arr){
//     if(num%2==0){
//         even=num;
//         break
//     }
     
// }
// console.log(even)

/////

let arr=[2,4,5,4,1,3,6,7,9];
let even=arr.find(function(num){
    if(num%2==0){
        return num
    }
})
console.log(even)