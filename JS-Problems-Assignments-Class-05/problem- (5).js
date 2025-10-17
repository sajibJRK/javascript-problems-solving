// Problem 5: Count Odd Numbers
 let arr =[1,2,3,4,5,6,7,8,1,8];
 let odd=0;
 let b= arr.forEach(num => !(num%2==0)? odd++:null)
 console.log(odd)