// Problem 14: Check Triangle Validity
// Write a program to check whether three sides can form a triangle.
// Hint: For a triangle, sum of any two sides must be greater than the third.

let a= 1;
let b= 2;
let c= 3;
if((a+b>c)&&(a+c>b)&&(b+c>a)){
    console.log("valid")
}
else{
    console.log("not valid")
}