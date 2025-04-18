/**
 * Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
 */

// task1



// Task 1
class BankAccount {
    constructor(balance = 0) {
      this._balance = balance;
    }
    
     deposite(amount) {
        
    }
    
     withdraw(amount) {
        
    }
    
    get balance() {
        return this._balance;
    }
    
    set balance(balance) {
        
        if (balance < 0) {
            throw Error("balance should be greater than 0")
        }
        this._balance = balance;
    }
  }
  
  // Task 2
  class Shape {
      
       area() {
          return 0;
      }
  }
  
  class Circle extends Shape {
      
       area() {
          return 1;
      }
      
  }
  
  class Rectangle extends Shape {
      
       area() {
          return 2;
      }
      
  }

  let circleObj = new Circle();
  console.log(circleObj.area());
  