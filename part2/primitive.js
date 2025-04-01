// numbers, boolean, string, null, undefined, symbol

let marks = 89.2;
console.log(typeof marks); // number

let isActive = true;
console.log(typeof isActive); // boolean

let username = "Bigboss";
let firstname = 'Lion';
let lastname = `King`;

let fullname = `${firstname} King`; // this is called string interpolation -- allowed only in backtick.

console.log(username);
console.log(firstname);
console.log(lastname);
console.log(fullname);

let abc;
console.log(abc); // undefined {no definition is available}

let exampleOfnull = null;
console.log(exampleOfnull);


// symbol is primitive datatype which provide guarantee to be unique.

let mySymbol = Symbol();
console.log(mySymbol); // always returns Sysmbol

let myS1 = Symbol("mySymbol");
let mys2 = Symbol("mySymbol");

console.log(myS1 == mys2); // false
console.log(myS1);
console.log(typeof myS1);