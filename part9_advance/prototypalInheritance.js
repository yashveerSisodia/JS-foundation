function Person(name) {
    this.name = name
}


Person.prototype.greet = function () {
    return `Namaste! I am ${this.name}`;
}

let p1 = new Person("Yash");
console.log(p1.greet());