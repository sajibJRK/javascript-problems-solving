// Problem 10: Find Total Word Length
// let names=["sajib","shohag","sadhon","munna"];
// let sum=names.reduce((total,name) => total+name.length ,0)
// console.log(sum)

////
// let names=["sajib","shohag","sadhon","munna"];
// let count=0
// let sum=names.forEach(num=>count+=num.length)
// console.log(count)

////
let names=["sajib","shohag","sadhon","munna"];
let sum= 0
for (name of names){
    sum+=name.length
}
console.log(sum)