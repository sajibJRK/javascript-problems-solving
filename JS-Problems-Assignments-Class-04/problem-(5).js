// Problem-05
// Write a function that reverses the digits of a number.
// Hint: Convert number to string and loop backward to form the reversed number.

function num(dig){
   let str=dig.toString()
   let reversed=''
   for(let i=str.length-1; i>=0;i--){
    reversed+=str[i]
      
   }
  console.log(reversed)
}
num(1235679)
