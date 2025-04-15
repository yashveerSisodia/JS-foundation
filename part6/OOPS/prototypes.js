// protypes are the hidden property of every object, which  refer to other object


const car = {
    tyres: 4,
    power: `1500 CC`
}

const teslaCar = {
    driver: `AI`,
    __proto__: car
}

// Object.setPrototypeOf(teslaCar, car)
console.log(teslaCar.power);

// OR 





