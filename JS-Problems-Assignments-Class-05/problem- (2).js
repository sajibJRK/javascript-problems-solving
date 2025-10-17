//  Problem 2: Find the Largest Number

let arr =[1,2,3,4,5,6,7];
let b= arr.reduce((big ,ele) => ele>big? ele:big);
console.log(b);