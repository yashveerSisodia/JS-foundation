// write "while" loops that calculates sum of all num from 1 to 500

let num1 = 1;
let num2 = 500;
let sum = 0; // initial
while (num1 <= num2) {
    sum = sum + num1;
    num1++; 
}
console.log(sum);

// write "wihile" loop that counts down from  5 to 1 and stores num in an arr

let countNum = 5;
let tillNum = 1;
let countDown = [];

while (countNum >= tillNum) {
    countDown.push(countNum);
    countNum--;
}
console.log(countDown);

// {do while loop}take user input using prompt and store in an array.. if user inputs "stop" then stop
// only run in the browser console
/*
let teaCollection = [];
let tea;

do {
    tea = prompt(`Enter your fav tea, to stop enter "stop" `);
    
    if (tea !== "stop") {
        teaCollection.push(tea);
    }

} while (tea !== "stop");

console.log(teaCollection);

*/

// write a do while loop to add num from 1 to 3 and stores result in variable name "total"

let var1 = 1;
let var2 = 3
let total = 0
do {
    total += var1;
    var1++;
} while (var1 <= var2);

console.log(total);

// write a "for" loop that multiply each element in array by 2 and stores in new array.


let arr1 = [2, 4, 6];
let multipliedNum = [];

arr1.forEach(element => {
    multipliedNum.push(element * 2);
});

console.log(multipliedNum);










