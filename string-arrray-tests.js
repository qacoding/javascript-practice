//*****************************************************************************
/*
 1. Filter strings into separate arrays
 2. Test if all characters are UNIQUE in a given string
 3. LONGEST word in a string
 4. Check if each numbers in an array is greater than 18
 5. Check whether all elements in the grades array are the EVEN numbers.
 6. Grab all even, odd numbers out of given array
 7. Reverse a given String
    Reverse Array In Place
 8. Switch the string Ex: First name , Last name
 9. Find largest number in an array
 10.Calculate sum of range numbers in an array
 11.Find white spaces in the character array
    Remove white spaces in the character array
 12.Find a character in the string
 13.Find out if number is prime or not
 14.Find absolute value of a number
 15.Remove Duplicate ones from array
 16.Palindrome
 17.JSON.stringify() method converts a JavaScript value to a JSON string
 18.Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 19.Fastest way to find duplicates between two arrays javascript
 20.To remove duplicates from two arrays
 21.Filter method to check if num is greater than another num
 22.Filter method to retrieve data from array object
 23. Map method example(multiply numbers in an array)
 24. Determine if two strings are permutation of each other. Ex; 'baseball', 'ballbase'
 25. Add up to given number
 26. Count of each character in a string
 27. Count unique values in an array
 28. Find the max consecutive repitative chracter
 29. Reverse all letters of each word in string but not the whole string as such.
 30. Given a string say "I am a human being" the output should reverse all letters of each word but not the whole string as such.
 31. Arrange Array in Ascending and Descending order using sort() method
 32. Ascending, Descending  order without using sort() method





 */



//*****************************************************************************

//1. sort strings into to two separate arrays
console.log('--------------------------');
let fruits = ['apple', 'banana', 'grape','apple'];

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
    console.log('All Apples from array  : ' + appleBox);
    console.log('Everything else in Other box: ' + otherBox);
}

//console.log(sort(['apple','banana', 'grape','apple']))
console.log(sort(fruits))
console.log('--------------------------');

//-------------------------
// Using filter method on array
var resulting = fruits.filter(num =>{
     return num !== 'apple';
 })

console.log('using filter method: '+resulting);

console.log('--------------------------');
//********************************
/* 2. Test if all characters are UNIQUE in a given string
  Using Indexof, charAt
  The charAt() method returns the character at the specified index in a string.
  The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
   You can use just str[i] instead of charAt */
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
console.log('Is \"shar\" unique ? :'+unique('shar'));
console.log('--------------------------');

//*******************************
// 3. LONGEST word in a string


let text = 'this is english dictionary'
function long (str){
    var newstr = str.split(' ');
   // console.log(newstr);
    var longest = newstr[0];
    for (let char of newstr){
        if (char.length > longest.length){
            longest = char;
        }
    }
    console.log('Longest word length is :'+longest.length);
    return longest;
}

console.log('Longest word in text "this is english dictionary :" ' +long(text) );
console.log('--------------------------');

//*******************************************
// 4. Check if each numbers in an array is greater than 18
//Using for loop
var numbers = [91, 21, 35];
var result = true;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 18) {
        result = false;
        break;
    }
}
console.log('Are numbers in [91,21,35] greater than 18? : ' +result); // true

//using filter method
var num1 = [10,20,30,40,50];
var checkNum = function(num){
return (num >= 40);
}

var checkNumResult = num1.filter(checkNum);
console.log('using filter method:' +checkNumResult);

// using every method(es6)
var ages = [19,2,45]
function check(age){
    return age > 18;
}

console.log('Are numbers in [91,21,35] greater than 18? : ' +ages.every(check));
console.log('--------------------------');

//********************************
// 5.  Check whether all elements in the grades array are the EVEN numbers.
// using every() method
var grades = [2,34,10,78];

var isEven = grades.every(function (e){
    return e % 2 == 0;
})

console.log('Are numbers EVEN in [2,34,10,78]: '+isEven);

// using regular function check all num in an array are even
function eventNum(grade){
evenNumber = true;
for (var i of grade){
//console.log(i);
if (i%2 != 0){
evenNumber = false;
}

}
return evenNumber;
}

console.log(eventNum(grades));
console.log('--------------------------');
//*********************************************
// 6.  Grab all even, odd numbers out of given array
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
    console.log(evenNum,oddNum);
}

evenOdd(allNum);
console.log('--------------------------');

//*****************************************************
// 7. Reverse a given String
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


// Reverse  an array using for loop
var num2 = [10,20,30,40,50];
var newNum = []
for (var i = num2.length-1; i >= 0; i--){
    newNum.push(num2[i]);
}

console.log('reverse using for loop: ' +newNum);

console.log('reversed using array.reverse()method: '+ num2.reverse());

//Reverse array in place
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}

console.log('Reverse array in place: '+reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]));

console.log('--------------------------');
//******************************************
// 8. Switch the string Ex: First name , Last name
//using push() and for loop with i=1 i>=0, i--
function reverseName(str){
    str = str.split(' ');
    let backName = [];
    for (var i = str.length; i >= 0; i--){
        backName.push(str[i]);
    }
    return backName.join(' ');
}

console.log('Switch strings \'english dictionary awesome\' : ' +reverseName('english dictionary'));
console.log('--------------------------');
// Using 'unshift' method, switch the strings
function switchName(str){
    let newStr = str.split(' ');
    let switchNameResult = [];
    for (var char of newStr){
        switchNameResult.unshift(char);
    }
    return switchNameResult.join(' ');
}

console.log('Switch strings \'Kannada dictionary awesome\' : ' +switchName('kannada dictionary awesome'));
console.log('--------------------------');

//********************************************
// 9. Find largest number in an array
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
console.log('--------------------------');


 //******************************************
// 10. Calculate sum of range numbers in an array

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

console.log('--------------------------');
//****************************************

//11.Count white spaces in the character array

function whiteSpace(strChar){
 spaceCount = 0;
 for (var i in strChar){
 console.log(strChar[i]);
 if (strChar[i] == ' '){
 spaceCount = spaceCount+1;
 }
 }
 return spaceCount;
}

console.log('white spaces are: ' + whiteSpace(['a',' ','b', ' ']));
console.log('-----------------------------');

//Remove white spaces in the character array
function removeSpace(str){
 return (str.split(' ').join(''));
}
console.log(removeSpace('kannada naadu nammadu'));
console.log('-----------------------------');

//*******************************************
//12.Find a character in the string
//This algorithm will find a character in the string.If string is "Programming" algorithm will find r

function charFind(wording){
 console.log('string found is'+wording.search('fun'));
 console.log('string found is' +wording.includes('fun'));
 console.log('string found is'+wording.indexOf('fun') > -1);
}
charFind('programming is fun');
console.log('-------------------------------');

//********************************************
//13.Find out if number is prime or not
//Prime numbers are numbers that are bigger than one and cannot be divided evenly by any other number except 1 and itself.
//Prime number should not be divisible by 2
//Ex: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,

 var isPrime = function (value) {
    console.log('checking number for prime/not-prime: ' +value);
     for(var i = 2; i < value; i++) {
         if(value % i === 0) {
             return false;
         }
     }
     return value > 1;
 }
 console.log('prime/not-prime:  '+isPrime(5));
 console.log('-----------------------------');

 //********************************************

  // 14.Find absolute value of a number
  //Logic is if number value is less than 0 then it's positive equivalent will be returned if not same number returns

  function absolute(numnum){
  if (numnum < 0){
  return (numnum * -1);
  }else
  return (numnum);
  }

  console.log(absolute(-5));

//****************************************

// 15.Remove Duplicate ones from array
//The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.


let ab = ["Banana", "Orange", "Apple", "Mango", "Mango", "Apple"];
let bb = [];

for(let i=0; i < ab.length; i++){
//console.log(ab[i]);
// indexOf returns -1 if no match found
if(bb.indexOf(ab[i]) === -1){
bb.push(ab[i]);
}
}
console.log(bb.sort());
console.log('---------------------------');


// 16.Palindrome

function palindrome(str){

var result = str.split('').reverse().join('');
console.log(result);
if (result == str){
return true;
}else
return false;
}

console.log('is gadag a palindrome?'+palindrome('gadag'));

function palindromeString(str){
    var newStr = str.split('');
    var resultStr = [];
    for( var i = newStr.length; i >= 0; i--){
        resultStr.push(newStr[i]);
    }
   // console.log(resultStr.join(''));
   // console.log(str);
    if (resultStr.join('') == str){
     return true;
    }else
 return false;
}

console.log(palindromeString('gadag'));

// This one to test palindrome for long sentence
function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];

 /* charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
    lettersArr.push(char);
    }
  });*/

  // use can use for(var i of charactersArr too instead of above forEach
   for (var i of charactersArr){
    if(validCharacters.indexOf(i) > -1){
      lettersArr.push(i);
     }
    }
  return lettersArr.join('') === lettersArr.reverse().join('');
}

console.log('is \'Madam I\'m Adam\'is Palindrome?-- '+ isPalindrome("Madam I'm Adam"));
console.log('--------------------------');

// 17. JSON.stringify() method converts a JavaScript value to a JSON string
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

//When receiving data from a web server, the data is always a string.

// 18.Parse the data with JSON.parse(), and the data becomes a JavaScript object.

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
console.log('-----------------------------');

// 19.Fastest way to find duplicates between two arrays javascript

var resultArray = [];

function compareArray(arr1, arr2){
  for(let i in arr1){
    for (let j in arr2){
      if (arr1[i] == arr2[j]){
        resultArray.push(arr1[i]);
      }
    }
  }
  return(resultArray);
}

console.log(compareArray([1,2,3], [1,2,6]));

// 20. to remove duplicates from two arrays

var a = [1,2,3,3];
var b = [7,7,4,5];
var c = [];

for (var i in a){
if(c.indexOf(a[i]) === -1){
  c.push(a[i]);
}
}
/*for(let i=0; i < ab.length; i++){
//console.log(ab[i]);
if(bb.indexOf(ab[i]) === -1){
bb.push(ab[i]);
}
}*/

for (var j in b){
if(c.indexOf(b[j]) === -1){
c.push(b[j]);

}

}
console.log(c);

//21.Filter method to check if num is greater than another num

var weather = [72,44,34,56,77]

var goOutside = weather.filter(function(temp){
return temp > 44;
})

console.log('go outside :' +goOutside);
console.log('***********************************');

//22. filter method to retrieve data from array object
var forcast = [
{ day:'Mon',sun:true},
{day:'Tue', sun:false},
{day:'Wed', sun:true}
]
var resultDay = [];
var sunnyDay = forcast.filter(function(data){
return data.sun;
})
console.log(sunnyDay);
console.log('***********************************');

//23. Map method example(multiply numbers in an array)

var mulNum = [10,20,30,40,50];
var mulNumResult = mulNum.map(function(num){
return num*10;
})
console.log('Array multiplied using map: ' +mulNumResult);
console.log('***********************************');

// map on string array

var greetings = ['hi','hello','hey','thanks'];
//greetings.shift();
//console.log(greetings);

var shout = greetings.map(function(greet){
return greet.toUpperCase();
//return hiShout.shift();
})

console.log(shout.pop());
console.log(shout);

console.log('***********************************');

// 24. Determine if two strings are permutation of each other. Ex; 'baseball', 'ballbase'

function isPermutation (strA, strB){

var newStrA = strA.split('').sort().join('');
var newStrB = strB.split('').sort().join('');
//console.log(newStrA);
//console.log(newStrB);
//return strA.split('').sort().join('') == strB.split('').sort().join('');
return newStrA == newStrB;

}

console.log('Is strings \'baseball\',\'ballbase\' are permutation of each other? --' +isPermutation('baseball','ballbase'));
console.log('***********************************');

var c = [3,4,5,6,7];
console.log(c);
function texting(arr){
for(var i=0; i<arr.length/2; i++ ){
var tempVar = arr[i];
arr[i] = arr[arr.length - 1 - i];
arr[arr.length - 1 - i] = tempVar;
}
return arr;
}
console.log(texting(c));
console.log('***********************************');
// 25. Add up to a given number
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log('Add up to a given number 6:'+addUpTo(6));
 //Second way to add

 function addUpTo1(n) {
   return n * (n + 1) / 2;
 }
console.log(addUpTo1(6))

console.log('***********************************');

//26. Count of each character in a string

function charCount(str){
var result = {};
var newStr = str.toLowerCase();
for(var char of newStr){
//console.log(i);
// If character is other than a-z,0-9 Ex:space, special character will be ignored.
if(/[a-z0-9]/.test(char)){
// If character is in object, increment the counter (result)
if(result[char] > 0){
 result[char]++;
}else {
// if counter is zero that means character is not in object, so add 1
 result[char] = 1;
 }
}
}
return result;
}
console.log(charCount('Your PIN number is 1234'));

console.log('***********************************');

// 27.Count unique values in an array
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log('count unique values in an array [1,1,1,1,2]: '+countUniqueValues([1,1,1,1,2]));

// My way :)
function countUniqueValues1(arr){
   // if(arr.length === 0) return 0;
    var i = 0;
    var k = 0;
    for(var j = 0; j < arr.length; j++){
        if(arr.indexOf(arr[j]) == arr.lastIndexOf(arr[j])){
         i++
        }else{
        k++
        }

    }
    return i+k;
}
console.log('count unique values in an array [1,1,1,1,2,3,3,4,5,6,6] Vijaya way:'+countUniqueValues([1,1,1,1,2,3,3,4,5,6,6]));

console.log('***********************************');

//28.Find the max consecutive repitative chracter

var a="ffgggggtvshjsdhjffffffffffhvjbjcharu";
		var max=0, sum=0;
		var prev=a.charAt(0);
		//console.log(prev);
		for (var i = 1; i < a.length; i++) {

			if(a.charAt(i)==prev) {
			sum++
			}else{
			   // console.log(max);
			  //  console.log(sum);
				max=Math.max(sum, max);
				//console.log(sum,max);
				sum=0;
				}

			prev=a.charAt(i);
		}
		console.log(max+1);
console.log('***********************************');

// 29.Pairs whose sum is n
//ex: A = [1,2,4,-6,5,7,9,....]
//B = {3, 6, 3, 4, 0 .......}
//n = 5 -> pairs whose sum is n
//Output = (1,4), (5,0)....

var a = [4,6,5,0,1,3,2];
var b = [0, -2, -1, 4, 6,3,3,2,1];
var n = 5;
		for(var i = 0; i< a.length; i++)
			for(var j= 0; j<b.length; j++)
			{
				if(a[i]+b[j] == n)
				{
					console.log("( "+ a[i] + " , " + b[j] + " )");
				}
			}
console.log('***********************************');

//30. Given a string say "I am a human being" the output should reverse all letters of each word but not the whole string as such.

function reverseWord(str){
 var arr = str.split(' ');
 var resultStr = [];

 if(str.length > 0){
   for( var i = 0; i < arr.length; i++){
    var newArr = arr[i].split('');
    //console.log(newArr);
     for( var j = newArr.length; j >= 0; j--){
     //console.log()
            resultStr.push(newArr[j]);
        //    console.log(resultStr);
        }
    }
   return resultStr.join(' ');
 }
}
console.log('Reverse all letters of each word: '+ reverseWord('I am Human'));
console.log('***********************************');
//Given an array say [0,1,2,3,5,6,7,11,12,14,20]
//  given a number say 5.
//  Now find the sum of elements which sum to 5
//  eg:2+3=5, 0+5=5 etc.
//***** STILL NOT WORKING ************
function sumArr(arr){
var sum = 5;
var result = 0;
//console.log(arr);
for(var i = 0; i < arr.length; i++ ){
//console.log(arr[i]);
   for(var j = 1; j < arr.length; j++){
  // console.log(arr[i]);
  // console.log(arr[j]);
   var result = arr[i]+arr[j];
if(result == sum){
   console.log(arr[i],arr[j]);
  // console.log(arr[i]+arr[j]);
  /* if ( arr[i]+arr[j] == sum){
  // console.log(arr[i],arr[j]);
   return (arr[i], arr[j]);
   }*/

return arr[i],arr[j];
   }

   }

/* if ( arr[i]+arr[j] == sum){
    console.log(arr[i],arr[j]);
    return (arr[i], arr[j]);
}*/

}
}

console.log(sumArr([0,1,1,2,3,5,6,7,3,4,11,12,14,20]));
console.log('***********************************');

//31. Arrange Array in Ascending and Descending order using sort()
//sort() method will produce an incorrect result when sorting numbers.
//You can fix this by providing a "compare function"

function ascending(arr1){
var ascendOrder = arr1.sort(function(a,b){return a-b} );
return ascendOrder;
}
console.log('ascending order:');
console.log(ascending([40, 100, 1, 5, 25, 10]));

function descending(arr2){
var descendOrder = arr2.sort(function(a,b){return b-a} );
return descendOrder;
}
console.log('descending order:')
console.log(descending([40, 100, 1, 5, 25, 10]));



//32.Ascending, Descending  order without using sort() method

function sorter(array)
{
   // var count = array.length - 1;
 var swap;
 for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < array.length; j++)
        {
            if (array[j] > array[j + 1])
            {
                swap = array[j + 1];
                array[j + 1] = array[j];
                array[j] = swap;
            }
        }
    }
   return array;
}

console.log(sorter([4, 10, 2, 9, 11, 3, 13, 5]));

function sorterDesc(array)
{
   // var count = array.length - 1;
 var swap;
 for (var i = 0; i < array.length; i++)
    {
        for (var j = 0; j < array.length; j++)
        {
            if (array[j] < array[j + 1])
            {
                swap = array[j + 1];
                array[j + 1] = array[j];
                array[j] = swap;
            }
        }
    }
   return array;
}

console.log(sorterDesc([4, 10, 2, 9, 11, 3, 13, 5]));
