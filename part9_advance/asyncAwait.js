const userData = {
    name: "testuser",
    email: "testuser1@example.com"
}

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(userData);
            reject("error while fetching data");
        }, 3000);
    })
}


async function getUserData() {
    try {
        console.log("fetching user data");
        const data = await fetchUserData();  // will wait for this method to return.
        console.log("success");
        console.log("user data:", data);
    } catch (error) {
        console.log(error);
    }
}

getUserData();

