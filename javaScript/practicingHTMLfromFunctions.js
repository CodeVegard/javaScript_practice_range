const colours = ["red", "blue", "green"];

//We're going to create an HTML list from the array above 

function createList(items){
    let listItems = "";
    for (let i = 0; i < items.length; i++) {
        listItems += "<li>"+items[i]+"</li>";
    }

    const finalHTML = "<ul>"+ listItems + "</ul>";
    return finalHTML;
}

let newList = createList(colours);
console.log(newList);

const container = document.querySelector("div");


container.innerHTML = newList;

//--------------------------------------
// // Practicing default parameters in functions:

// function printMessageBadDefault(message) {
//     if (!message){
//         message = "No message value provided";
        
//     };
//     console.log(message);
// };


// // The function above checks if the "message" value is falsy and 
// // sets "message" to "no message value provided" if it is. 
// // If it's truthy it prints the message you passed.

// function printMessageGoodDefault(message = "No message value provided") {
//     console.log(message);
// };

// // This second function is better, it simply has a default value. 

// // You can also have multiple parameters with default values:
// function sum(numA = 0, numB = 0) {
//     return numA + numB;
// };

// // This way, if we only pass one argument, we get our orignal number. 
// // If there's no arguments we get 0 instead of "NaN".



//-----------------------------------------------
// Creating reusable HTML in functions from JS lesson 3.2
// We’re gonna build a reusable component: 

const messageContainer = document.querySelector(".message-container");
const message = createMessage("warning", "some text goes here");
messageContainer.innerHTML = message;

//-----------------------------------------------
// Error handling from JS lesson 3.2
// Let's look at catching errors. I'll call a function that does not exists

// getSomething();
// This will log an error in the console, but won't provide the end user with anything.

// We can catch the error using the try/catch blocks that are built into JS

const result = document.querySelector(".result");

try {
    getSomething();  //This is the code we want to try to execute
    console.log("success")
    result.innerHTML = "Success!"
    // This whole block will run if the code runs successfully 
} catch (error) {
    console.log("Error occured", error); 
    // This is what runs if the code fails to execute
    // In this case, we console log that an error occured and the error message
    result.innerHTML = "Function did not run"; //Feedback to end user
};

