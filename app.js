//     Array Programs

/*   1.1Given an array of integers, find the largest product yielded from three of the integers**
 
var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsortedArray); // 21000

//Write your program here
 
*/

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
const computeProduct = (unsortedArray) => {
    sortedArray = unsortedArray.sort((a, b) => a - b);
    let length = unsortedArray.length;
    let largeProduct = sortedArray[length - 1] * sortedArray[length - 2] * sortedArray[length - 3];
    return largeProduct;
}
computeProduct(unsortedArray);
console.log(computeProduct(unsortedArray));






/*1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in `O(n)` time**
  ```javascript
  // The output of the function should be 8
  var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
  var upperBound = 9;
  var lowerBound = 1;

  //Write your program here
  
  ```
  */





/*    1.3 Removing duplicates of an array and returning an array of only unique elements**
  
  var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

   //Write your program here

*/



var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function uniqueArray(a) {
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
    return newArr;
}

uniqueArray(array);
console.log(uniqueArray(array));



/*
<a name="array--largest-difference"></a><a name="1.4"></a>
- **[1.4](#array--largest-difference) Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element**
  ```javascript
  var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

  findLargestDifference(array);

  //Write your program here

  ```
  
1.5   Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)**
  
  var firstArray = [2, 2, 4, 1];
  var secondArray = [0, 0, 0, 2];
  var thirdArray = [-2, -2, -3, 2];

  //Write your program here
  
 */




/*
1.6 Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!**
  
  var firstArray = [2, 2, 4, 1];
  var secondArray = [1, 2, 0, 2];

 
  //Write your program here

  */


var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

function arraysIntersection(a1, a2) {
    return a1.filter(function (n) { return a2.indexOf(n) !== -1; });
}

arraysIntersection(firstArray, secondArray);
console.log(arraysIntersection(firstArray, secondArray));






//    Strings Programs



/*    2.1 Given a string, reverse each word in the sentence**
    `"Welcome to this Javascript Guide!"` should be become `"emocleW ot siht tpircsavaJ !ediuG"`
  
  var string = "Welcome to this Javascript Guide!";

  //Write your program here
  */


var string = "Welcome to this Javascript Guide!";

function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}
reverseBySeparator(string, "");

console.log(reverseBySeparator(string, ""));






/*   2.2  Given two strings, return true if they are anagrams of one another**
  `"Mary" is an anagram of "Army"`
  
  var firstWord = "Mary";
  var secondWord = "Army";

    //Write your program here
*/


var anagrams = function (firstWord, secondWord) {

    if (firstWord.length != secondWord.length) return false;

    firstWord = firstWord.split("").sort().join("");
    secondWord = secondWord.split("").sort().join("");

    for (var i = 0; i < firstWord.length; i++) {
        if ((firstWord.charAt(i)) != (secondWord.charAt(i))) {
            return false;
        }
    }

    return true;
};
console.log(anagrams("mary", "army"));




/*     2.3   Check if a given string is a palindrome**
  `"racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account`
  
  isPalindrome("racecar"); // true
  isPalindrome("race Car"); // true

  //Write your program here
  */


function isPalindrome(str) {
    var regexp = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(regexp, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
var result = isPalindrome("race Car");
console.log(result);




/*     2.4   (#string--palindrome) Check if a given string is a isomorphic**

  ```
    For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
    to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
    string A to every char of string B.

    `paper` and `title` would return true.
    `egg` and `sad` would return false.
    `dgg` and `add` would return true.

    javascript
    isIsomorphic("egg", 'add'); // true
    isIsomorphic("paper", 'title'); // true
    isIsomorphic("kick", 'side'); // false

    //Write your program here
  */


function isIsomorphic(firstString, secondString) {

    if (firstString.length !== secondString.length)
        return false
    var letter = {};
    for (var i = 0; i < firstString.length; i++) {
        var letterA = firstString[i], letterB = secondString[i];
        if (letter[letterA] === undefined) {
            if (secondString.indexOf(letterB) < i) {
                return false;
            } else {
                letter[letterA] = letterB;
            }
        } else if (letter[letterA] !== letterB) {

            return false;
        }
    }

    return true;
}
isIsomorphic("egg", 'add'); // true
isIsomorphic("paper", 'title'); // true
isIsomorphic("kick", 'side'); // false
console.log(isIsomorphic("egg", 'add'));






/*

## Stacks and Queues

<a name="stack-queue--stack-as-queue"></a><a name="3.1"></a>
- **[3.1](#stack-queue--stack-as-queue) Implement enqueue and dequeue using only two stacks**
  ```javascript
  var inputStack = []; // First stack
  var outputStack = []; // Second stack

  //Write your program here
  ```

<a name="stack-queue--parentheses-balancing"></a><a name="3.2"></a>
- **[3.2](#stack-queue--parentheses-balancing) Create a function that will evaluate if a given expression has balanced parentheses -- Using stacks**
  In this example, we will only consider "{}" as valid parentheses
  `{}{}` would be considered balancing. `{{{}}` is not balanced
  ```javascript
  var expression = "{{}}{}{}"
  var expressionFalse = "{}{{}";

  isBalanced(expression); // true
  isBalanced(expressionFalse); // false
  isBalanced(""); // true

  //Write your program here
  ```
 
*/

//     Recursion Programs

/*       4.1     Write a recursive function that returns the binary string of a given decimal number**
  Given `4` as the decimal input, the function should return `100`

 
  decimalToBinary(3); // 11
  decimalToBinary(8); // 1000
  decimalToBinary(1000); // 1111101000

  //Write your program here
  */


function decimalToBinary(num) {
    if (num >= 1) {
        if (num % 2) {
            return decimalToBinary((num - 1) / 2) + 1;
        } else {
            return decimalToBinary(num / 2) + 0;
        }
    } else {
        return '';
    }
}

decimalToBinary(3); // 11
decimalToBinary(8); // 1000
decimalToBinary(1000); // 1111101000
console.log(decimalToBinary(3));






/*    4.2    Write a recursive function that performs a binary search**

  
  function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
 
  }
  */




function recursiveBinarySearch(array, value, leftPosition, rightPosition) {

    if (leftPosition > rightPosition)
        return -1;

    var middlePosition = Math.floor((leftPosition + rightPosition) / 2);
    if (array[middlePosition] === value) {
        return middlePosition;
    }
    else if (array[middlePosition] > value) {
        return recursiveBinarySearch(array, value, leftPosition, middlePosition - 1);
    }
    else {
        return recursiveBinarySearch(array, value, middlePosition + 1, rightPosition);
    }
}






//     Numbers
/*     5.1Given an integer, determine if it is a power of 2. If so,
  return that number, else return -1. (0 is not a power of two)**
 
  isPowerOfTwo(4); // true
  isPowerOfTwo(64); // true
  isPowerOfTwo(1); // true
  isPowerOfTwo(0); // false
  isPowerOfTwo(-1); // false

  //Write your program here:
 
*/


function isPowerOfTwo(number) {
    return (number !== 0) && ((number & (number - 1)) === 0);
}

isPowerOfTwo(4); // true
isPowerOfTwo(64); // true
isPowerOfTwo(1); // true
isPowerOfTwo(0); // false
isPowerOfTwo(-1); // false
console.log(isPowerOfTwo(64));






