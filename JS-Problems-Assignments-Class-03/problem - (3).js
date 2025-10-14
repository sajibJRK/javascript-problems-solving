// problem-03
// Write a program to count how many vowels (a, e, i, o, u) are in a given string.
// Hint: Use a loop and if condition to check each character.
let word ="aeoU-sajib";
let count=0;
for(let i=0;i<word.length;i++ ){
  let letter=word[i];
  if((letter =='a'||letter=='A')||(letter =='e'||letter=='E')||(letter =='i'||letter=='I')||(letter =='o'||letter=='O')||(letter =='u'||letter=='U')){
    count++;
  }
}
console.log(count)
