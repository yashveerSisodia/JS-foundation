/*
 write a for loop that loops through the array and stops when it finds "chai", store all elements
 in selectedTeas;
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let index = 0; index < teas.length; index++) {
    
    const element = teas[index];
    if (element === "chai") {
        break;
    }
    
    selectedTeas.push(element);
}
// console.log(selectedTeas);

/*
 store the other cities other than "Paris" in a new array.
*/

let cities = ["London", "NY", "Paris", "Berlin"];
let visitedCities = [];

for (let index = 0; index < cities.length; index++) {
    const element = cities[index];

    if (element !== "Paris") {
        visitedCities.push(element)
    }
    
}
// console.log(visitedCities);

// use for-of loop store nums less than 4

let nums = [1, 2, 3, 4, 5];
let smallNums = [];

for (const num of nums) {

    if (num === 4) {
        break;
    }
    
    smallNums.push(num);
}
// console.log(smallNums);


// use for-in loop

let citiesPopulation = {
    "London" : 89000,
    "NY" : 78000,
    "Paris" : 47386,
    "Berlin" : 899898
};

let cityNewPopulation = {};

for (const city in citiesPopulation) {
    if (city === "Berlin") {
        break
    }
    cityNewPopulation[city] = citiesPopulation[city];
}
// console.log(cityNewPopulation);


// store the city which have population less than 89000

let smallCities = {};

for (const city in citiesPopulation) {
    
    if (citiesPopulation[city] >= 89000) {
        continue;
    }
    smallCities[city] = citiesPopulation[city];

}

// console.log(smallCities);


/**
 * use for-each
 * 
 */

let worldCities = ["Berlin", "Tokyo", "NY", "Paris"];
let visitedWorldCities = [];

worldCities.forEach((city) => {
    if(city === "Paris") {
        return;
    }
    visitedWorldCities.push(city);
});
// console.log(visitedWorldCities);
