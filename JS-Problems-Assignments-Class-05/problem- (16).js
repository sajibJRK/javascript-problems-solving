// Problem 16: Find Index of First Number Greater Than 5

let arr=[1,2,4,8,5,4,1,3,6,7,9];
let index=arr.findIndex(function(num){
    if(num>5){
        return num
    }
})
console.log(index)