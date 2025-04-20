// if you have multiple async await then better to use Promise all


function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("successOne")
        }, 2000);
    })
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("successTwo")
        }, 2000);
    })
}



async function load() {
    try {
        debugger;
        console.log("fetching ........", new Date());
        // let resultone = await one();
        // let resulttwo = await two();

        let [resultOne, resulttwo] = await Promise.all([one(), two()]) // best way
        console.log("success.......", new Date());
    } catch (error) {
        console.log(error);
    }
} 

load()