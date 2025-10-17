// Problem 12: Remove Duplicate Values

let arr=[1,1,2,2,3,4,5,6,6]
let filterArr=[];
arr.forEach(function(num){
        if (!filterArr.includes(num)){
            filterArr.push(num)
        } 
})
console.log(filterArr)