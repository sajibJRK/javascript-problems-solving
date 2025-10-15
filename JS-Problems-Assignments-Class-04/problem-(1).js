// problem-01
// Write a function to find the sum of all digits of a given number.
// Hint: Use % and Math.floor() inside a loop to extract each digit.
// =>
    function number(num) {
        let sum=0;
        while(num>0){
            let last = num%10;
            sum+=last;
            num=Math.floor(num/10);
        }
        console.log(sum)
    }
number(3212);
