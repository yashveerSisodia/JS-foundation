// bind: return a function with a specific this and arg
const person = {
    name : "Yashu",
    greet() {
        console.log(`Namaste! I am ${this.name}`);
    }
}

// person.greet();

// let p1 = person.greet.bind({name: "king"});  // person.greet will give Undefined 

// p1();

// call : calls the function immediate

const user = {
    name: "KK",
    greet(city, country) {
        console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
    }
}

user.greet.call(user, "Ghaziabad", "India");


// apply: call the method immediately, consumes params in the array

user.greet.apply(user,  ["tokyo", "Japan"]);

