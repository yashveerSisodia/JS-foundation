/**
 * Playing with Types
Task 1: 
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
 */

function stringToNumber(input) {
    let result = Number(input)
    // console.log(typeof result);
    if (`${result}` === `NaN`) {
        return "Not a Number"
    }
    return result;
}

let num = stringToNumber("1232 ee");
// console.log(num);

/**
 * Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
 */

function flipBoolean(input) {
    
    if (typeof input === "string") {

        if (input.toLowerCase() === "true" || input === "1") {
            return false;
        }
    
        if (input.toLowerCase() === "false" || input === "0") {
            return true;
        }

    } else if (typeof input === "number") {
        if (input === 1) {
            return false
        }
        if (input === 0) {
            return true;
        }
    } else {
        return false;
    }
    
   
}

let result = flipBoolean();
console.log(result);


/**
 * Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */


function whatAmI(input) {
    let type = typeof input;
    return `I am a ${type}`
}
// console.log(whatAmI(8888));


/**
 * 
 * Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
 */


function isItTruthy(input) {
    if(input === "truthy") {
        return `It's truthy!`
    } else if (input === "falsey") {
        return `It's falsey!`;
    }
}
