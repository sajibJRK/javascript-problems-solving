// problem -13
// Write a function to generate a random odd number between 1 and 50.
// Hint: Use Math.random() and check if it’s odd using %.

function randomNum(){
    let num;
    do{
        num=Math.floor(Math.random()*50);
    }
    while(num % 2===0);
    console.log(num)
}
randomNum()
 