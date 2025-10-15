// Problem 11
// Write a function to check whether a number is perfect or not.
// Hint: A perfect number is when the sum of its divisors equals the number itself.
function perfect(num) {
   let divisors = 0;
   for (let i = 0; i < num; i++) {
      if (num % i == 0) {
         divisors += i;
      }
   }
   if (num == divisors) {
      console.log("perfect number");
   } else {
      console.log("your number is not perfect");
   }
}
perfect(6);
