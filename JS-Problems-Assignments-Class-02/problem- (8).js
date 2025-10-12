// problem -8
// Write a program to assign a grade (A, B, C, F) based on marks.
// Hint: Use if...else if...else.

let marks = 50;
if(marks<0 || marks>100){
    console.log("mark is not valid")
}
else if (marks >= 80 && marks<=100) {
          console.log("Grade A");
}
else if (marks >= 60) {
console.log("Grade B");
}
else if (marks >= 40) {
console.log("Grade C");
} 
else {
console.log("Grade F");
}