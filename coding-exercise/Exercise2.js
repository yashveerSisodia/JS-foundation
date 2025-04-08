/**
 * Arrays and Methods
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:



Task 1: Array Filtering

Write a function filterNumbers(arr) that returns only numbers from a mixed array
 */

function filterNumbers(arr) {
    let numArr = [];
    arr.forEach(element => {
        if (typeof element === "number") {
            numArr.push(element);
        }
    });
    
    return numArr;
}

let mixArray = ["Berlin", 898, "king", 90, "abc"];
// console.log(filterNumbers(mixArray))

/**
 * Task 2: Array Reversal

Write a function reverseArray(arr) that reverses the array
 */

function reverseArray(arr) {
   return arr.reverse();
}

/**
 * Task 3: Find Maximum in an Array

Write a function findMax(arr) that returns the largest number in the array
 */

function findMax(arr) {
    let maxNum = arr[0];
    arr.forEach(element => {
        if (element > maxNum) {
            maxNum = element;
        }
    });
    return maxNum;
}

let array2 = [-12, -232, -442, -2, -2244, -334];
console.log(findMax(array2))

/**
 * Task 4: Remove Duplicates from an Array

Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
 */

function removeDuplicates(arr) {
    return [... new Set(arr)];
}

let array3 = [12, 232, 442, 2, 2244, 334, 2, 12];
// console.log(removeDuplicates(array3));


/**
 * Task 5: Flatten a Nested Array

Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
 */

function flattenArray(arr) {
    let result = [];
  
    for (let item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item)); // Recursive call
      } else {
        result.push(item);
      }
    }
  
    return result;
  }
//   console.log(flattenArray([1, [2, [3, 4]], 5]));
