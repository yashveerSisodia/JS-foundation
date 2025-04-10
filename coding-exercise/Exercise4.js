/**
 * Higher Order function and Arrow Functions
 */

/**
 * Task 1: Using Array Methods

Write a function squareNumbers(arr) using map() and arrow functions
 */


/**
 * Task 2: Custom Filter Function

Create a function filterEvenNumbers(arr) using filter() and arrow functions
 */

function filterEvenNumbers(arr) {
    return arr.filter((num) => ((num % 2) === 0))
}

// console.log(filterEvenNumbers([1,2,3,4,5]));

let numArr = [1,2,3,4,5];
// const evenNums = numArr.filter((num) => ((num % 2) === 0));
// console.log(filterEvenNumbers(numArr));

//

// let shopingCart = [1, 2, 3, 4, 5];

// let total = shopingCart.reduce((acc, num) => (acc + num),0)
// console.log(total);

/**
 * Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
 */

const words = ["India", "Japan", "Australia"];

function findLongestWord(arr) {
   return arr.reduce((acc, curVal) => (curVal.length > acc.length ? curVal : acc), "");
}
console.log(findLongestWord(words));
