// problem-01
// Write a program to count how many characters are in a given string (without using .length directly inside the loop).
// Hint: Use a loop to go through each character and count them manually.
function Character(str) {
  let count = 0;
  for (let char of str) {
    count = count + 1;
  }
  console.log( count);
}
Character("Hello");
