// class, inheritance, super, extends, encapsulation

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
// console.log(animalOne);
// console.log(animalOne.description());


// ENCAPSULATION: restricting the accessibility outiside of the class to the data object

class BankAccount {
    #balance = 0.00;  // '#' works as a private access modifier only accessible to class level.

    depositeBalance(amount) {
        this.#balance = amount;
    } 

    fetchBalance() {
        return `INR ${this.#balance}`;
    }
}

let bankAcc = new BankAccount(); // no args contructor because no constructor present in class

// console.log(bankAcc.fetchBalance());
// bankAcc.depositeBalance(19121);
// console.log(bankAcc.fetchBalance());

// note: can't have two constructor in the class. not allowed

class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    display() {
        return `display`;
    }
}

let testUser1 = new User();
console.log(testUser1);
console.log(testUser1.display());

let testUser2 = new User("testUser2", "testUser2@example.com");
console.log(testUser2);


// ABSTRACTION: hiding complex stuff, just displaying the neccessary stuff.


