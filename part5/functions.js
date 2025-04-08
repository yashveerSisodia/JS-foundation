
function name(name) {
    return `Your name is ${name}`;
}

// console.log(name('Tango Charlie'));

// console.log(orderTea(`lemon tea`));


function orderTea(tea) {
    function confirmOrder() {
        return `your order "${tea}" has been confirmed`;
    }
    return confirmOrder();
}

// arrow function
const calculateTotal = (price, quantity) => {
    return price * quantity;
}

// console.log(calculateTotal(3, 2));

// `this` refers to the `context`
/**
 *  here `this` is refering to the context of node, but if you use same code in the browser the output of this context will get changed.
 */
function testOfThis() {
    // console.log(this);  
    
}
testOfThis();


/**
 * Higher order functions & nested functions
 * 
 * write a func named `processedTeaOrder` that takes another function, `makeTea` as a parameter and 
 * calls it with the argument `earl grey` and return the result of calling `makeTea`
 * 
 * here, we are passing the function as an argument.
 */

function makeTea(typeOfTea) {
    return `makeTea: ${typeOfTea}`;
}

function processTeaOrder(teaFunc) {
    return teaFunc(`earl grey`);
}

const tea = processTeaOrder(makeTea);
// console.log(tea);

/**
 * write a func named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
 * Store the returned function in a variable named `teaMaker` and call it with `green tea`.
 */

function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`;
    }
}

let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
