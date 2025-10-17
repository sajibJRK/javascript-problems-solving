// Problem 3: Find the Smallest Number
let arr = [9,4,5,6,7,8];
let b = arr.reduce((small, num) => small<num? small:num )
console.log(b)