// problem-11
// Write a program to remove extra spaces from a sentence.
// Hint: Use .trim() and .replaceAll("  ", " ").
 let str="  i love   javaScript "
let trimed=str.trim();
let replaced=trimed.replaceAll(/\s+/g,' '); //regex
console.log(replaced)