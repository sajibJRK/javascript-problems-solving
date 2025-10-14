// problem-06
// Write a program to check whether a string is a palindrome (same forward and backward).
// Hint: Compare the string with its reversed version.
let str ="madam";
let word="";
for(let i= str.length-1;i>=0;i--){
  word+=str[i];
}
if(word==str){

  console.log("string is a palindrome")
}
else{
  console.log("string is not palindrome")
}