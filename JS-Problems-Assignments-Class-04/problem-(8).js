// problem -8
//     Write a function that removes all digits from a string.
// Hint: Use a loop and skip characters that are between '0' and '9'.

function word(char){
   let abcd = '';
    for(let i=0 ; i<char.length;i++){
        if(char[i]>=0){
            continue;
        }
        else{
            abcd+=char[i];
        }
    }
console.log(abcd);
}
word("12hggjh12")
