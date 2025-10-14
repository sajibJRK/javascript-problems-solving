// problem 13
// Write a program to count how many digits (0–9) are in a given string.
// Hint: Use a loop and if to check if a character is between '0' and '9'.
let str = "sajib 12";
let count =0;
for(let i =0;i<str.length;i++){
        if(/\d/.test(str[i])){
                count++
            }
        }
console.log(count);
