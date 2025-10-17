// Problem 9: Filter Only String Elements

let arr =["sajib",'sadhon',1,2,3,true,"shohag",false];
let str= arr.filter(function(ele){
    return typeof ele =="string"
})
console.log(str)