// problem-10
// Write a function to find the factorial of a number using a while loop.
// Hint: Multiply decreasing numbers until you reach 1.

function facto(num) {
    let result = 1;
    while (num > 1) {
        result *= num;  
        num--;          
    }
    console.log(result)
}
facto(20)