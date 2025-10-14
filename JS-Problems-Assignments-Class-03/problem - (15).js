//  problem 15
// Write a program that prints every substring of a given string using loop and .slice().
// Hint: Use for loop and slice from 0 to i.
let str='sajib kumar';
let subStr="";
for(let i=0;i<str.length;i++){
    subStr+=str[i];
    if(str[i]==" "){
        continue
    }
    console.log(subStr)
}