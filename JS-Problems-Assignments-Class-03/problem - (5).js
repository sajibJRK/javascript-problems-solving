// problem -5
// Write a program to count how many times a given character appears in a string.
// Hint: Use a loop and compare each character with the given one.

function str(word,letter){
  let count =0;
  for(let i=0; i<word.length;i++){
    if(word[i]==letter){
      count++
    }
    else if(word[i].toUpperCase()==letter){
      count++
    }
  }
  console.log(count);
}
str("banana","N")

