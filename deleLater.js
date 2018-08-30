/**
 * Created by hiremathv on 8/29/18.
 */

let fruits = ['apple','grapes','banana', 'apple'];

appleBox = [];
otherBox = [];

function fruitSort(fruit){
  for(let item of fruit){
    if(item == 'apple'){
      appleBox.push(item);
    }else
      otherBox.push(item);
  }
  console.log(appleBox , otherBox);
}

fruitSort(fruits);

//***********

var text = 'univrse';

function unique(str){
  for (var i = 0; i <= str.length; i++){
    console.log(i);
    if(str.indexOf(str[i]) !== str.lastIndexOf(str[i]))
      return 'false'
  }
  return 'true'
}

console.log(unique(text));

//************

//Longest

let str = 'America got talent';
let newStr = str.split(' ');
let longest = newStr[0];

function longestWord(words){

  for(var char of words){
    console.log(char.length);
    if(char.length > longest.length)
      longest = char;
  }
  return longest;
}
console.log(longestWord(newStr));

//*************

// greater than 18 in an array

/*let num = [81,44,92,67];
let result = true;
function numCheck(numbers){
  for(var char of numbers){
    if(char <= 18)
      result =false;
  }
  return result;
}

console.log(numCheck(num));*/

//************

var ages = [97,23,45,67];

function ageCheck(age){
  return age > 18;
}
console.log(ages.every(ageCheck));

let num = [9,44,92,67];
//let result = true;
function numCheck(numbers){
  for(var char of numbers){
    return char >= 18
  }
}

console.log(numCheck(num));

//**********

//Even no

let number = [22,40,66,2];
function even(num){
  return (num % 2 == 0);
}
console.log(number.every(even));

//------------

let numero = [2,3,4,5,6,19,10];
let evenNum = [];
let oddNum = [];

function evenOdd(num){
  for (var i of num){
    if(i % 2 == 0){
      evenNum.push(i);
    }else
      oddNum.push(i);
  }
  console.log(evenNum, oddNum);
}

evenOdd(numero);

//**************
//Reverse a string

let texting = 'dictionary';
let newTexting = texting.split('');
console.log(newTexting.reverse().join(''));

//-------------

let str1 = 'dictionary';
let newStr1 = str1.split('');
let result1 = [];
//console.log(newStr1);

for (var char of newStr1){
  result1.unshift(char);
}
console.log(result1.join(''));
//---------
//using for loop

let str2 = 'universe';
let newStr2 = str2.split('');
let result2 = [];

for(var i = newStr2.length; i >= 0; i--) {
  result2.push(newStr2[i]);
}
console.log(result2.join(''));
//------

//switching two strings

let str3 = 'awesome world';
let newStr3 = str3.split(' ');
let result3 = [];

for (var i = newStr3.length; i >= 0; i--){
  result3.push(newStr3[i]);
}
console.log(result3.join(' '));

//-------------
//Find largest number in an array

let number1 = [10,23,45,99];
console.log(Math.max(2,3,12,67));