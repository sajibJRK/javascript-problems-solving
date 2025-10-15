// problem-02
// Write a function that counts how many uppercase letters are in a string.
// Hint: Check with char >= 'A' && char <= 'Z' inside a loop.
// =>


// function letters(string){
//     let count=0;
//     for(let i=0; i < string.length; i++){
//         if(string[i]>='A' && string[i]<='Z' ){
//         count++;
//         };
//     };
//     console.log(count);
// };
// letters('SSaaSS123')



let a = "Sajib kumar    12     .;';'.'.'.'      "
let b = a.split("");
let upper=0;
let lower=0;
let number=0;
let spcialchar =0;
let whitespace =0;
for(let i=0;i<b.length;i++){
if(/[a-z]/.test(b[i])){
lower++
}
    else if(/[A-Z]/.test(b[i])){
    upper++
    }
        else if(/\d/.test(b[i])){
            number++
        }
            else if(/\s/.test(b[i])){
                whitespace++
            }
else{
    spcialchar++
}
}
console.log("your sting is-\" "+a +"\"")
console.log("=>")
console.log(lower+"-lowerCase char in your string")
console.log(upper+"-upperCase char in your string")
console.log(number+"-number in your string")
console.log(whitespace+"-whiteSpace in your string")
console.log(spcialchar+"-spcialChar in your string")


