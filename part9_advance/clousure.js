// closure is a function... which remembers the variables from outer function even after outer finished running.

function outer() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

