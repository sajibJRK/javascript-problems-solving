// problem-09
// Write a function to count how many words are in a sentence without using .split().
// Hint: Count spaces manually in the loop.

function words(sente){
    let count =1;
    for(let i =0; i<sente.length;i++){
        if(sente[i]=== ' '){
            count++
        }
    }
console.log(count)
}
words("hello i'm sajib kumar")
