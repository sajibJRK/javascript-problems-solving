// problem-7
// Write a function that finds the smallest digit in a number.
// Hint: Extract digits using % and compare to find the smallest.
// =>

    // function num(dig){
    //    let smail = 9;
    //    while(dig>0){
    //     let lest=dig%10;
    //     console.log(lest);
    //     if(smail>lest){
    //         smail=lest;
    //     }
    //     dig = Math.floor(dig/10);
    //    }
    //    console.log(smail)
    // }
    // num(8888899989);

// problem-finds the big and socend big digit in a number


let bigNum=1234;
let num =bigNum;
let big=0;
let scndBig =0;
while(num>0){
    let last = num%10;
    if(last>big){
        big=last;
    }
    num = Math.floor(num/10)
}

while(bigNum>0){
    let lest = bigNum%10;
    if(lest<big&&lest>scndBig){
        scndBig=lest;
    }
    bigNum = Math.floor(bigNum/10)
}
console.log("big digit is-"+big)
console.log("second big digit is-"+scndBig)

    