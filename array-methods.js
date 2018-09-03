// forEach method on array
var arr = [1,2,3,4,5,6];

arr.forEach(function(item){
    console.log(item);
})

// above code with ES6 Arrow function

arr.forEach(item => {
    console.log(item);
})

// includes() method

console.log(arr.includes(3));

//***************************************
//filter() method

//const result= arr.filter(num => num > 3 )
const result= arr.filter(function(num){
   return num > 3;

})
console.log(result);

//*****************************************

//reduce Method
 var numbers = [65,44,12,4];

 function getSum(total, num){
     return total+num;
 }
 console.log(numbers.reduce(getSum));

 // Using ES6

const sum = numbers.reduce((total,num) => total+num);
console.log(sum);

//*****************************************

//sort() Method

let grades = [92,1,3,78,44];

console.log(grades.sort());

//sort() descending order