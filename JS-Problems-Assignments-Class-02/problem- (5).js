// problem-05
// Write a program to check whether a given year is a leap year or not.
// Hint: Leap year if (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0).
let year=2025;
if ((year%4==0 && year%100 !==0)||(year%400==0)) {
  console.log("Leap year");
} else {
  console.log("Not leap year");
}