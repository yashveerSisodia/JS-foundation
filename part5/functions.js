
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
    console.log(this);  
    
}
testOfThis();