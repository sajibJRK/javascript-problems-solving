// problem 12
// Write a program to perform +, -, *, / between two numbers.
// Hint: Use if...else if to check operator.

let num1=10;
let num2=5;
let operator="+";
if(operator=="+"){
  console.log(num1+ num2);
}
else if(operator=="-"){
console.log(num1-num2);
}
else if(operator === "*"){
console.log(num1*num2);
}
else if(operator==="/"){
console.log(num1/num2);
}
else{
console.log("Invalid operator");
}

