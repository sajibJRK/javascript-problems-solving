// problem-04
// Write a function to check whether a number is prime or not.
// Hint: Prime numbers are divisible only by 1 and itself.

function prime(num){
    for(let i =2; i<num; i++){
        if (num%i==0){
            console.log('not prime')
            return;
        }
    }
     console.log('prime')
}
prime(10)