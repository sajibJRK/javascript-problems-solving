// problem-12
// Write a program to find the longest word in a sentence.
// Hint: Use .split(" ") and compare lengths using a loop.
let sent="i love javaScript";
let long="";
let str=sent.split(" ");
for(let i=0;i<str.length;i++){
    if(long.length<str[i].length){
        long=str[i]
    }
}
console.log(long)
