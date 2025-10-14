// problem-2
// Write a program that reverses a given string.
// Hint: Use a loop to add each character to a new string in reverse order.
let str ="sajib";
let word="";
for(let i= str.length-1;i>=0;i--){
  word+=str[i];
}
console.log(word)