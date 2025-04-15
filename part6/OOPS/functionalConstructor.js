// functional contructors and errors

function Car(make, model) {

    // check if Car has make using new keyword or not.

    /**
     * 
     
    if (!(this instanceof Car)) {
        throw new Error("I: New keyword should be used.")
    }
    */

    // OR 

    if (!new.target) {
        throw new Error("II: New keyword should be used.")
    }

    this.make = make;
    this.model = model;
}

let myCar =  new Car("Tata", "nexon");
console.log(myCar);
let myNewCar = new Car("Mercedes", "Benz");
console.log(myNewCar);

Car.prototype.color = "Green";

console.log(myCar);