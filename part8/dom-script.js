// example 1 


document.getElementById("changeParagraph").addEventListener("click", function () {
    let text = document.getElementById("paragraph").innerText;
    if (text !== "para changed") {
        document.getElementById("paragraph").innerText = "para changed";
    } else {
        document.getElementById("paragraph").innerText = "this is a paragraph";
    }
}); 

// example 2



document.getElementById("cityHighlight").addEventListener("click", function () {
    let classes = document.getElementById("cityList").firstElementChild.classList;
    let flag = true;
    for (let className of classes) {
        if (className === "highlight") {
            classes.remove("highlight");
            flag = false;
        }
    }
    if (flag) {
        classes.add("highlight");
    }
});


// example-3

function changeOrder() {
    let type = document.getElementById("coffeeType");
    let text  = type.innerText;
    type.innerText = text === "Espresso"? "Latte" : "Espresso";
}


// example-4

document.getElementById("addOrder").addEventListener("click", function () {
    let orderList = document.getElementById("orderList");
    let newNode = document.createElement("li");
    newNode.innerText = "Eggs";
    orderList.appendChild(newNode);
});


// example-5

document.getElementById("removeTask").addEventListener("click", function () {
  let tasks = document.getElementById("tasks");
  tasks.lastElementChild.remove()

});

// example-6

let chai = document.getElementById("chai")
chai.addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaType")) {
        alert("you have selected: "+ event.target.innerText);
    }
    
})


// example-8

document.getElementById("feedbackForm").addEventListener("submit", function (event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    alert("feedback submitted");
    let para =  document.getElementById("feedbackDisplay");
    para.innerText = `feedback is: ${feedback}`;
    para.style.backgroundColor = "yellow";
    para.style.color = "red";
})