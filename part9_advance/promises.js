// promise :  represents something that will be completed in the future [pending, resolve, reject]

function getData() {
    debugger
    return new Promise((resolve, reject) => {
        let success = false;
        if (success) {
            resolve(`data fetched successfully`);
            
        } else {
            reject(`failed to fetch data`);
        }
    });
}

getData().then((data) => {

    console.log(data);
}).catch((err) =>{
    console.log(err);
})
    
