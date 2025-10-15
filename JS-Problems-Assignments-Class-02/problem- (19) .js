// Problem 19: Check Armstrong Number (3 digit)
// Write a program to check if a number is an Armstrong number.
// Hint: Armstrong = sum of cubes of digits = number.
 let number=153;
 let num=number;
 let sum=0;
 while(num>0){
    let last= num%10;
    sum=sum+ Math.pow(last ,3)
    num=Math.floor(num/10)
 }
 if(sum==number){
    console.log("Armstrong")
 }
else{
    console.log("Not Armstrong")
}