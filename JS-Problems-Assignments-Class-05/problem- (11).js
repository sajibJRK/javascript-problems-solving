// Problem 11: Find Index of a Specific Element

let arr = [10,20,30,40,50];
let value=50;
let indx= arr.findIndex(function(ele,idx){
   if (ele==value){
    return idx
   }
})
console.log(indx)