// Problem 18: Check Odd and Positive
// Write a program to check if a number is both odd and positive.
// Hint: Use % and >.
// Sample Input/Output:

// Input: 7 → Output: Odd & Positive
// Input: -5 → Output: Odd but Not Positive
let num= -9 ;
if(!(num%2==0)){
    if(num>0){
        console.log("Odd & Positive")
    }
    else{
        console.log("Odd but Not Positive")
    }
}
else{
    console.log("number is even")
}