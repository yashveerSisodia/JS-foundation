// introduced in ES6

fetch("content/user_data.json")
    .then((response) => {
        // console.log(response.json());
        return response.json();
    }).then((data) => {
        console.log(data);
        document.write(`<h1> ${data.name} - ${data.email} </h1>`);
    })
    .catch((error) => {
    console.error(error);
    })