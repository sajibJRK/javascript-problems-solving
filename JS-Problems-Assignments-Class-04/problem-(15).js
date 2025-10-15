// problem -15
// Write a function to count how many special characters (like !, @, #, $) are in a string.
// Hint: Use condition to check: not a-z, not A-Z, not 0-9.

function word(str){
    let count=0
    for(let i= 0 ; i<str.length;i++){
        let char=str[i]
        if((char>='a' && char<='z') || (char>= 'A' && char<='Z') ||(char >= 0 && char<=9) ){
            continue;
        }
        else{
            count++
        }
    }
    console.log(count)

}word('@jfd@@sda % fjfda #dfjas')