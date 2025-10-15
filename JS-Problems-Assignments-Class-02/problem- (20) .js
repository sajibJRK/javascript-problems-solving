// Problem 20: Student Performance Category (if...else if)
// Write a program to categorize a student’s performance based on marks.
// Hint:

// Marks ≥ 90 → Excellent
// Marks ≥ 75 → Very Good
// Marks ≥ 50 → Average
// Marks < 50 → Needs Improvement
// Sample Input/Output:

// Input: 92 → Output: Excellent
// Input: 70 → Output: Average

let mark=99;
if(mark>=90){
    console.log("Excellent")
}
else if(mark>=75){
    console.log("Very Good")
}else if(mark>=50){
    console.log("Average")
}else if(mark<50){
    console.log("Needs Improvement")
}