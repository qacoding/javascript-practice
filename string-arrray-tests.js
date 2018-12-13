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
    Max using Reduce Method
 10.Calculate sum of range numbers in an array
    - Using regular for loop, reduce method, Max, Min methods
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
 27. Count unique values in Number array
 28. Find the max consecutive repetitive character
 29. Reverse all letters of each word in string but not the whole string as such.
 30. Given a string say "I am a human being" the output should reverse all letters of each word but not the whole string as such.
 31. Arrange Array in Ascending and Descending order using sort() method
 32. Ascending, Descending  order without using sort() method
 33. What is the most common character in a string(using object)
     Does String A has the same characters as String B(is it an Anagram?)
     Does the string has any repeated character in it?
     NOTE: All the above has same technique to resolve
 34. Max character repeated in a string using split(char) method
 35. Find if characters in words in an array are unique
 36. Display the string which doesn't have consecutive repeated characters.
 37. Reverse numbers in an array
 38. Sort the words that are anagrams in an array
 39. Print stars in a row (* ** *** **** *****)
 40. Find the Prime numbers till the number
 41. Count occurrence of number in an Array
     Count occurrence of number using Reduce method
 42. Moving an element in an array to a given position
 43. Exclude given numbers from Array
 44. Remove elements from head of an Array
 45. Repeat a String with for loop
 46. FizBuzz (1-100 numbers with multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
 47. Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21]
 48. ***IMP****Merge Sort to sort the numbers in an Array





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
console.log(sort(['apple','banana', 'grape','apple']))
// you can use this too: sort(fruits);

let newFruits = ['mango','kiwi','pineapple','orange','apple'];
console.log('using sort method: '+newFruits.sort());
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

// Find if numbers are even or odd till the input number
function evenOddNum(num){
 for ( var i = 0; i < num; i++){
  if(i % 2 ==0)
  console.log(i +' EVEN');
  else
  console.log(i +' ODD');
 }

}

console.log(evenOddNum(10));
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


// Reverse an array using for loop

var num2 = [10, 22, 03, 44, 75, 96, 27, 8];
var newNum = []
for (var i = num2.length-1; i >= 0; i--){
    newNum.push(num2[i]);
}

console.log('reverse using for loop: ' +newNum);

console.log('reversed using array.reverse()method: '+ num2.reverse());

// Reverse array in place
function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}

console.log('Reverse array in place: '+reverseArrayInPlace([10, 22, 03, 44, 75, 96, 27, 8]));

console.log('***********************************');

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
console.log('***********************************');

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
console.log('***********************************');


// 9. Find largest/Max number in an array
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

 //Using Reduce Method

const testArray = [2,67,45,99,123,78];
 function getMaxReduce(arr){
     var result = arr.reduce(function(accumulator,current){
         if(current > accumulator ) return current
         return accumulator
     });
     return result;
     //return arr.reduce((a, b) => (a > b) ? a : b);

 }
 console.log(getMaxReduce(testArray));

 console.log('***********************************');


// 10. Calculate sum of range numbers in an array

function sumRange(num){
    var sum = 0;
    for (var i of num){
        sum = sum + i;
    }
return 'Sum of array num [0,2,3] using for loop is  : ' +sum;
}

console.log(sumRange([0,2,3]));

// Sum using reduce method

let reduceNum = [1, 5, 2, 3];

let reduceResult = reduceNum.reduce(function(sum, num){
  return sum+num;

},0)

console.log ('Sum from an array using Reduce Method: '+reduceResult);

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

console.log('***********************************');


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
console.log('***********************************');

//Remove white spaces in the character array
function removeSpace(str){
 console.log('string with spaces: '+str)
 return (str.split(' ').join(''));
}

console.log('After removing the spaces: '+removeSpace('kannada naadu nammadu'));
console.log('-----------------------------');

console.log('***********************************');

//12.Find a character in the string
//This algorithm will find a character in the string.If string is "Programming" algorithm will find r

function charFind(wording){
 console.log('string found is'+wording.search('fun'));
 console.log('string found is' +wording.includes('fun'));
 console.log('string found is'+wording.indexOf('fun') > -1);
}
charFind('programming is fun');

console.log('***********************************');

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

console.log('***********************************');

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
console.log('***********************************');


// 16.Palindrome
// Steps://1. change the string to an array //2. use the reverse method //3. return the array as a string //4. return input= new reversed string

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

      // you can use for(var i of charactersArr too instead of above forEach
       for (var i of charactersArr){
            if(validCharacters.indexOf(i) > -1){
                lettersArr.push(i);
             }
        }
      return lettersArr.join('') === lettersArr.reverse().join('');
}

console.log('is \'Madam I\'m Adam\'is Palindrome?-- '+ isPalindrome("Madam I'm Adam"));

// Another way to check Palindrome

function palin(str){
        var inputStr  = str.toLowerCase().replace(/[^a-z]/gi,'').split('').join('');
        var reversedStr = str.toLowerCase().replace(/[^a-z]/gi,'').split('').reverse().join('');
        console.log('input Str: '+inputStr);
        console.log('reversed Str: '+reversedStr);
        if ( inputStr == reversedStr){
             return true;
            }else
            return false;
    }
console.log(palin("Madam I'm Adam"));
console.log('***********************************');

// 17. JSON.stringify() method converts a JavaScript Object value to a JSON string
//When receiving data from a web server, the data is always a string.

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}
//objectLiteral.lastName = 'Turner';
//console.log(objectLiteral.firstname);
console.log('Object before stringify: ' );
console.log(objectLiteral);
console.log('After JSON.stringify()');
console.log(JSON.stringify(objectLiteral));
console.log('***********************************');



// 18.Parse the data with JSON.parse(), and the data becomes a JavaScript object.

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log("JSON.parse('{ \"firstname\": \"Mary\", \"isAProgrammer\": true }'" );
console.log(jsonValue);
console.log('***********************************');

// 19.Fastest way to find duplicates between two arrays javascript

var resultArray = [];

function compareArray(arr1, arr2){
  for(let i of arr1){
    for (let j of arr2){
      if (i == j){
        resultArray.push(i);
      }
    }
  }
  console.log('Duplicates in two arrays: ' +arr1 +'  '+arr2);
  return(resultArray);
}

console.log(compareArray([1,2,3], [1,2,6]));
console.log('***********************************');

// 20. To remove duplicates from two arrays

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
console.log(a,b);
console.log('Removed duplicates from two arrays: '+c);
console.log('***********************************');

//21.Filter method to check if num is greater than another num

var weather = [72,44,34,56,77]

var goOutside = weather.filter(function(temp){
    return temp > 44;
})

console.log('Numbers more than 44 :' +goOutside);
console.log('***********************************');

//22. filter method to retrieve data from array object
var forcast = [
    { day:'Mon',sun:true},
    {day:'Tue', sun:false},
    {day:'Wed', sun:true}
]
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
    console.log('Is strings  '+strA +', '+strB +'  are permutation of each other?');
    return newStrA == newStrB;

}

console.log(isPermutation('baseball','ballbase'));
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
console.log('character count in a given string: ');
console.log(charCount('Your PIN numberr is 1234'));

console.log('***********************************');

// 27.Count unique values in Number array
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log('count unique values in an array: '+arr);
    return i + 1;
}
console.log(countUniqueValues([1,1,1,1,2]));


// Another way to solve above problem
// declare empty array; check if number is present in that empty array(bbc.indexOf(abc[i])= -1 if not present; if not push it to array bbc
function countUniqueValues1(abc){
let bbc = [];
for(let i=0; i < abc.length; i++){
    //console.log(ab[i]);
    // indexOf returns -1 if no match found
    if(bbc.indexOf(abc[i]) === -1){
        bbc.push(abc[i]);
    }
}
console.log('count unique values in an array using pushing unique values to empty array: '+abc);
return(bbc.sort().length);
}

console.log(countUniqueValues1([1,1,1,1,2,3,4,5,6,6,8]));

console.log('***********************************');

//28.Find the max consecutive repetitive character

function longest(seq){
var count = 0;
var max_count=0;
var max_char;
var prev_char;

for(var current of seq){
    //console.log(current);
    if( current == prev_char ){
        count  = count+1;
    }else{
        count = 1;
    }

    if(count > max_count){
        max_count = count;
        max_char = current;
    }
    prev_char = current;
}
console.log('Max consecutive in string: ' +seq);
return (max_char +':'+ max_count);
}
console.log(longest('aaeeeedd'));

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
				    console.log('Pairs whose sum is 5')
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
function sumArr(arr){
    var sum = 5;
    var result = 0;
    //console.log(arr);
    for(var i = 0; i < arr.length; i++ ){
        //console.log(arr[i]);
           for(var j = i+1; j < arr.length; j++){
                var result = arr[i]+arr[j];
                if(result == sum){
                    console.log(arr[i],arr[j]);
                }
           }
    }
    return (arr[i],arr[j]);
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
console.log('***********************************');



//32.Ascending, Descending  order without using sort() method
console.log('Ascending,Descending order not using sort()');
function sorter(array)
{
   // var count = array.length - 1;
 var swap;
 for (var i = 0; i < array.length; i++)
    {
        for (var j = i+1; j < array.length; j++)
        {
            if (array[i] > array[j])
            {
                swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
   return array;
}

//console.log(sorter([4, 10, 2, 9, 11, 3, 13, 5]));
//console.log(sorter([20, 20, 31, 56, 1, 12, 12]));
console.log(sorter([3, -9, -12,  -1, 12]));

function sorterDesc(array)
{
    // var count = array.length - 1;
    var swap;
    for (var i = 0; i < array.length; i++)
    {
        for (var j = i+1; j < array.length; j++)
        {
            if (array[i] < array[j])
            {
                swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}

console.log(sorterDesc([4, 10, 2, 9, 11, 3, 13, 5]));
console.log('***********************************');
//----------------------------------------
//33. Max character repeated in a string
//Given a string the character that is most commonly used in a string
// Step 1: extract characters, count from string and add to a new object(charMap)
// Step 2: Loop through the object to find the character and count
function charMapping(str){
    const charMap = {};
    var max = 0;
    var maxChar = '';

    for ( var char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1;
        }
    }
    console.log('characters and count in a string: ');
    console.log(charMap);
    for (var char in charMap){
        //console.log(charMap[char]);
        if (charMap[char] > max){
            max = charMap[char];
            // console.log(max);
            maxChar = char;
        }
    }
    return maxChar;
}

console.log('Max character repeated in a string: ' +charMapping('hello world'));
console.log('***********************************');

// above question using split method
function letterCount(str){
    //var str = 'america is great';
    var chars = str.split('');
    var letCount = {};
    var max = 0;
    var maxChar = '';
    //console.log(newStr);

    for ( var i = 0; i < chars.length; i++){
        //console.log(newStr[i]);
        if ( letCount[chars[i]]){
            // letCount[chars[i]] = 0;
            letCount[chars[i]]++;
        }else
        letCount[chars[i]] = 1;
    }
    for( var char in letCount){
        console.log( char +':'+letCount[char]);
        if ( letCount[char] > max){
            max = letCount[char];
            maxChar = char;
        }
    }
    return ('Max repeated character is :' + maxChar );
}

console.log(letterCount('hello world'));

console.log('***********************************');

// 34. Max character repeated in a string using split(char) method
var getMax = function (str) {
    var max = 0,
    maxChar = '';
    for ( var char of str ){
   // console.log(char);
      //  console.log(str.split(char), str.split(char).length, max, maxChar);
        if (str.split(char).length > max){
            max = str.split(char).length;
            maxChar = char;
        }
    }
    return ('Max repeated character : '+maxChar );
};

console.log(getMax('hello world'));

console.log('***********************************');

//35. Find if characters in words in an array are unique
function repeat(str){
    str.forEach(function(char){
      //  console.log(char);
        for (var i = 0; i < char.length; i++){
          //  console.log(char[i]);
            //  console.log(char.indexOf(char[i]));
            if ( char.indexOf(char[i]) !== char.lastIndexOf(char[i])){
                //console.log()
                console.log ('duplicate found');
                return 'duplicate'
            }
        }
        console.log( 'unique');
    })
}

 console.log(repeat(['google','yahoo','amzon']));
 console.log('***************************');


//36. Display the string which doesn't have consecutive repeated characters.
 function repeatChar(str){
     str.forEach(function(char){
         //  console.log(char);
         var prev = char[0];
         // you can use this: var prev = char.charAt(0);
         for (var i = 1; i < char.length; i++){
             // console.log(char[i]);
             // you can use this: if(char.charAt(i) == prev){
             if(char[i] == prev){
                // console.log(char+': duplicate');
                 return char+'duplicate'
             }
             // you can use this:  prev = char.charAt(i);
             prev = char[i];
         }
         console.log(char+ ': unique');
     })
 }
  console.log(repeatChar(['google','yahoo', 'amazon']));
  console.log('***************************');

//37. Reverse numbers in an array
var c = [6,1,7,2];
console.log(c);
function texting(arr){
    for(var i=0; i<arr.length/2; i++ ){
        var tempVar = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tempVar;
    }
    console.log('Reversed array is :')
    return arr;
}
console.log(texting(c));

// Another way to reverse numbers.
//Steps: Just loop through starting from last num(d.length)

var d = [6,1,7,2];
console.log(d);
var dd = [];
for (var i = d.length; i >= 0; i-- ){
dd.push(d[i]);

}
console.log('Reverse : '+dd);
console.log('***********************************');

//38. sort the words that are anagrams in an array
//anagram is a word or a phrase made by rearranging the letters of another word or phrase
//Steps: For each loop through array; store words in object;

function perm(arr){
var anaPerm = {};
    arr.forEach(function(word){
    // console.log(word);
     var newArr = word.split('').sort().join('');
    // console.log(newArr);
     if( anaPerm[newArr]){
        return anaPerm[newArr].push(word);
        }
        anaPerm[newArr] = [word];
     })
return anaPerm

}
console.log(perm(['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop', 'cinema','iceman']));
console.log('-------------------');
// Just to check if two words are Anagram

function isAnagram(str1, str2){
    if (str1.length !== str2.length){
    return 'Not an Anagram'
    }
   var newObj = {};
   var sortStr1 = str1.split('').sort().join('');
   var sortStr2 = str2.split('').sort().join('');
   newObj.str1 = str1;
   newObj.str2 = str2;
   console.log(newObj);
   return (sortStr1 === sortStr2);
}

console.log(isAnagram('act','cat'));
console.log('***********************************');

//39. Print stars in a row (* ** *** **** *****)

 function showstars(rows){
 for (let i = 1; i <= rows; i++){
        let pattern ='';
        for (var j = 0; j < i; j++){
        pattern = pattern+'*';
        }
        console.log(pattern);
    }
}
console.log(showstars(5));
console.log('***********************************');
//-----------------------------------
//40. Find the Prime numbers till the number
function showPrimes(limit){
    for (var number = 2; number <= limit; number++){
    //  console.log(i);
       // if (prime(number))
       var result = true
       for (var factor = 2; factor < number; factor++){
                   if (number % factor === 0)
                   result = false;
                   }
             if(result)
        console.log('Prime number till '+limit +': ' +number);
    }
 }

showPrimes(10);
console.log('***********************************');

//41. Count occurrence of number in an Array

const numbersArray = [1, 2, 3, 4, 5, 5, 5];
function countOccurrences(array, searchElement) {
   let count = 0;
   for (let element of array)
     if (element === searchElement)
       count++;
   return count;
 }
const count = countOccurrences(numbersArray, 5);
console.log('count of 5 in '+numbersArray +' is: '+count);

// Count occurrence of number using Reduce method

const stringArray = ['cat','tap','cat','map'];
function countOccurrenceReduce(array, searchElement) {
 var result = array.reduce(function(accumulator, current ){
    if (current == searchElement)
        accumulator++;
      return accumulator
    },0)
  return result
}
const countReduce = countOccurrenceReduce(stringArray, 'cat');
console.log('Count of string \'cat\' in Array : ' +stringArray +' is:' +countReduce);
console.log('***********************************');

//42.Moving an element in an array to a given position

const numbersMove = [1, 2, 3, 4];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const element = array.splice(index, 1)[0];
  array.splice(position, 0, element);
  return array;
}
const output = move(numbersMove, 0, 1);
console.log('Moving an element 0 to 1 index in an array [1,2,3,4]  :'+output);

console.log('***********************************');

//43. Exclude given numbers from Array

const numbersExcept = [1, 2, 3, 4,5];

function except(array, excluded) {
  const outputExpect = [];
  for (let element of array)
    if (!excluded.includes(element))
      outputExpect.push(element);
  return outputExpect;
}
const outputResult = except(numbersExcept, [1, 5]);

console.log('Exclude [1, 5] from [1,2,3,4,5]  :'+outputResult);
console.log('***********************************');


//44.Remove elements from head of an Array

let chop = ['abc','dsdsd', 'jan','feb','march','april','may'];
function chopper(arr, excess){
    arr.splice(0,excess);
    return arr
}

console.log(chopper(chop,2));
console.log('***********************************');


//45. Repeat a String with for loop

function repeatWord(str,no){
let repeatStr = '';
    for ( let i = 0; i < no; i++){
     repeatStr = repeatStr + str;
    }
    return repeatStr;
}

console.log('Repeat string: '+repeatWord('car', 4));
console.log('***********************************');

//46. Write a program that prints all the numbers from 1 to 100.
//For multiples of 3, instead of the number, print "Fizz",
//for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function FizBizz(){
    for(let i = 1; i < 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log('FizzBuzz')
            }
        else if(i % 3 == 0){
            console.log('Fizz');
        }
        else if(i % 5 == 0){
            console.log('Buzz');
        }
        else console.log(i);
    }
}
FizBizz();
console.log('***********************************');

//47. Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21]
//characterized by the fact that every number after the first two is the sum of the two preceding ones

function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 // used ES6 Template literal in below console.(` is called tick)
 console.log(`Fibonacci series for ${n} is: ${arr}`);
 return arr[n]
}

console.log(`Element on Fib series in given Index is :`+fib(8));

// Fib series using Recursive method

function fibRecursive(n) {
  if (n < 2){
    return n
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}
console.log('Element on Fib series in given Index using RECURSIVE is :'+fibRecursive(8));

console.log('***********************************');
//48. ***IMP****Merge Sort to sort the numbers in an Array

function mergeSort (arr) {
    if (arr.length < 2) return arr;
    var middleIndex = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, middleIndex);
    var secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge (array1, array2) {
    var result = [];
    while (array1.length && array2.length) {
      var minElem;
      if (array1[0] < array2[0]) minElem = array1.shift();
      else minElem = array2.shift();
      result.push(minElem);
    }

    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);
    return result;
}

console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));

