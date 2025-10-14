// problem-14
// Write a program to remove all vowels from a string.
// Hint: Use .replaceAll() or a loop to skip vowels.
let str="sAjib kumar"
let word =str.replaceAll(/[AEIOUaeiou]/g,'');
console.log(word)