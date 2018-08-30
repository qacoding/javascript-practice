// sort strings into to categories

//let fruits = ['apple', 'banana', 'grape','apple'];

appleBox = [];
otherBox = [];
function sort (fruits) {
    for (let char of fruits) {
        if (char == 'apple') {
            appleBox.push(char);
        } else {
           otherBox.push(char);
        }
    }
    console.log('Apple box : ' + appleBox);
    console.log('Other box: ' + otherBox);
}

console.log(sort(['apple','banana', 'grape','apple']))

//********************************
// Test if all characters are UNIQUE in a given string
//Using Indexof, charAt
//The charAt() method returns the character at the specified index in a string.
//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// You can use just str[i] instead of charAt
function unique(str) {
    for (var i = 0; i < str.length; i++ ){
     //   console.log(str.charAt(i));
      // console.log(str.indexOf(str.charAt(i)));
       // if( str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))){
        if( str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
           return 'duplicate found'
        }
    }
    return 'string is UNIQUE!'
}
console.log(unique('shar'));

//*******************************
//LONGEST word in a string

function long (str){

    var newstr = str.split(' ');
   // console.log(newstr);
    var longest = newstr[0];
    for (let char of newstr){
        if (char.length > longest.length){
            longest = char;
        }
    }
   // console.log(longest);
    return longest;
}

console.log(long('this is english dictionary'));

//*******************************
// Check if each numbers in an array is greater than 18
//
var numbers = [91, 21, 35];
var result = true;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 18) {
        result = false;
        break;
    }
}
console.log(result); // true

// using every method(es6)
var ages = [19,2,45]
function check(age){
    return age > 18;
}

console.log(ages.every(check));

//********************************
// Check whether all elements in the grades array are the EVEN numbers.
// using every() method
var grades = [1,34,10,78];

var isEven = grades.every(function (e){
    return e % 2 == 0;
})

console.log(isEven);

//  Grab all even, odd numbers out of given array
// regular way
var a = [ 0,1,2,3,4,5,6,7,8,9,10]
var b = [];
var c =[];
for (var char of a){
    if( char % 2 == 0){
        b.push(char);
    } else {
        c.push(char);
    }
}
console.log('Sort Even, Odd numbers in two separate arrays: ');
console.log(b,c);


// using function
var allNum = [12,23,45,1,0,3,56]
var evenNum = [];
var oddNum = [];
function evenOdd(num){
    for (var char of num){
        if( char % 2 == 0){
            evenNum.push(char);
        } else {
            oddNum.push(char);
        }
    }
    console.log('Sort Even, Odd numbers in two separate arrays using function: ');
    console.log(b,c);
}

evenOdd(allNum);

//***************
// Reverse a given String
// Using reverse() method

function reverseString1(str){
    return(str.split('').reverse().join(''))
}

console.log('Reverse string \'English dictionary\': ' +reverseString1('English dictionary'));

// reverse string using for loop

function reverseString2(str){

    var str = str.split('');
    var resultStr = [];
    for( var i = str.length; i >= 0; i--){
        resultStr.push(str[i]);
    }
 return (resultStr.join(''));
}

console.log('Reverse string \'California\' using for loop : ' +reverseString2('California'));

//******************************************
// Switch the string Ex: First name , Last name
//using push() and for loop with i=1 i>=0, i--
function reverseName(str){
    str = str.split(' ');
    let backName = [];
    for (var i = str.length; i >= 0; i--){
        backName.push(str[i]);
    }
    return backName.join(' ');
}

console.log('Switch strings \'english dictionary awesome\' : ' +reverseName('english dictionary awesome'));

//********************************************
//Find largest number in an array
//using Math.max()
console.log('largest number in an array [3,19,20,5] using Math.max(): ' +Math.max(3,19,20,5));

// using for loop

 function largeNumber(num){
    let max = num[0];
    for (var i of num){
        if(i > max){
            max = i;
        }
    }
    return 'largest number in an array[4,2,9] is : ' +max;
 }
 console.log('largest number in an array [4,2,9] : ' +largeNumber([4,2,9]));


 //******************************************
//Calculate sum of range numbers in an array

function sumRange(num){
    var sum = 0;
    for (var i of num){
        sum = sum + i;
    }
return 'Sum of array num [0,2,3] using for loop is  : ' +sum;
}

console.log(sumRange([0,2,3]));

// Using math.max, math.min

function sumArray(num){
    var maxNum = Math.max(num[0],num[1], num[2]);
    //console.log(maxNum);
    var minNum = Math.min(num[0], num[1], num[2]);
    //console.log(minNum);
    var sum = 0;
    for(var i = minNum; i <= maxNum; i++){
        sum = sum +i;
    }
    return 'Sum of array num [1,2,3] using Math.max, Math.min is  : ' + sum;
}
console.log(sumArray([1,2,3]));



















