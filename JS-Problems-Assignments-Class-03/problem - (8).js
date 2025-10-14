// problem -8
// Write a program to count how many words are in a sentence.
// Hint: Use .split(" ") to separate words.
let str="  i love javaScript "
let trimed=str.trim();
let count=1;
for(let i=0; i<trimed.length;i++){
  if(trimed[i]==' '){
    count++
  }
}
console.log(count)