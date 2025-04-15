// class, inheritance, super, extends

class Person {

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    } 

     introduction = function () {
        return `${this.name} is a person having age: ${this.age} and address: ${this.address}`
    }

}

let personOne = new Person("Yash", 19.5, "USA");

// console.log(personOne);
// console.log(personOne.introduction());


// inheritance: achieved using extends keywords


class Animal extends Person {
    // can have its own properies as well and also extends the props of Person class
    constructor(personObj, type) {
        super(personObj.name, personObj.age, personObj.address);
        this.type = type
    }

    description = function () {
        return `Type: ${this.type}, AGE: ${this.age}`
    }
}
let animalOne = new Animal(personOne, "Human Being");
console.log(animalOne);
console.log(animalOne.description());