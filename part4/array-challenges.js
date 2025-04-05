const teaFlavours = ["green tea", "black tea", "oolong tea"];
console.log(teaFlavours);

let firstTea = teaFlavours[0];
console.log(firstTea);

const cities = ["London", "Tokyo", "Paris", "New York"];
// access the third element and store it into new variable.
let favouriteCity = cities[2];
console.log(favouriteCity);


const teaTypes = ["herbal tea", "white tea", "masala chai"];
// change second element of the array to "jasmine tea"

teaTypes[1] = "jasmine tea";
console.log(teaTypes);


let citiesVisited = ["Mumbai", "Sydney"];
// add new city "Berlin" in the array using push method
citiesVisited.push("Berlin");
console.log(citiesVisited);


let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
// remove last element of the array usng 'pop' and store it it variable with name lastOrder.
let lastOrder = teaOrders.pop();
console.log(lastOrder);

// create softcopy of the array and named softCopyTeas
// using teaFlavour
let softCopyTeas = teaFlavours;
teaFlavours.pop();
console.log(teaFlavours);
console.log(softCopyTeas);

// create hardcopy of the array 
let fruitsArr = ["apple", "mango", "orange", "guava", "grapes", "pineapple"];
let fruitsArrHardCopy = [...fruitsArr];  // --> Rest and Spread Operator
// fruitsArr.pop();
console.log(fruitsArrHardCopy);
let newFruits = fruitsArr.slice(1, 3);
console.log(newFruits);


// merge two arrays into new array worldCities

let europeanCities = ["Paris", "Rome"];
let asianCities  = ["Tokyo", "Bangkok"];

let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);

// find the length of an array and store it in variable name "worldCitiesLength"
let worldCitiesLength = worldCities.length;
console.log(worldCitiesLength);

// check if "Rome" is present in array, if yes then store the result "isRomeInList"
let isRomeInList = worldCities.includes("Rome"); // its case sensitive
console.log(isRomeInList);















