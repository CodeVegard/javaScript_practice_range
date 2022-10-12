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
    result.innerHTML = "Success!" // Feedback to the user

    // This whole block will run if the code runs successfully 
} catch (error) {
    console.log("Error occured", error); 
    // This is what runs if the code fails to execute
    // In this case, we console log that an error occured and the error message
    result.innerHTML = "Function did not run"; //Feedback to end user
} finally {
    // Runs regardless of what happens in the try statement
    // 
};

//-----------------------------------------------
// Arrow functions from JavaScript lesson 3.3

// Let's look at a function statement, then rewrite it as an arrow function:
// function logMessage() {
//     console.log("hello");
// }

const logMessage = (message) => {
    console.log(message);
};

// Note, when we only have one (1) parameter, we dont have to use () around our parameter
// I'll use the braces however, as a means of making the syntax easier to remember
// We could make the code above into one line if we like:
const logMessageLine = message => {console.log(message)};

// Let's make an arrow function with two parameters:
// const subtract = (a, b) => {
//     return a-b;
// };

// const sum = subtract(4, 3);
// console.log(sum);

// Let's rewrite it into one line. When your syntax is one line, 
// you don't need the return statement, as it is implicit:
const subtract = (a, b) => a-b;

const sum = subtract(4, 3);
console.log(sum);

// The example below is passing a function statement into our forEach.

const arr = ["blue", "red", "green"];

arr.forEach(function(item) {
    console.log(item);
});

// Let's rewrite it using an arrow function.
arr.forEach((item) => console.log(item));

// This is also handy in setTimeout functions:
// setTimeout(() => console.log("SetTimeout"), 1000);

// Both arrow functions and function statements are valid, it's all about legibillity


//-----------------------------------------------
// JavaScript 3.3 Task 1
// Convert the functions below to one-line arrow functions

// function greet(name) {
//     return `Hello ${name}!`;
//   }
  
//   function add(a, b) {
//     return a + b;
//   }

const greet = (name) => `Hello ${name}!`;

const add = (a,b) => a+b;

//-----------------------------------------------
// JavaScript 3.3 Task 2
// Convert the following from async/await to then/catch:
// async function getCatFacts() {
//     try {
//       const response = await fetch("https://noroff.herokuapp.com/v1/cat-facts/facts");
//       const results = await response.json();
//       console.log(results.length);
//     } catch (error) {
//       console.log(error);
//     }
//   }

// function getCatFacts1() {
//     fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
//     .then(function(response){
//         return response.json();
//     }).then(function(results){
//         console.log(results.length);
//     }).catch(function(error = "API Call failed"){
//         console.log(error);
//     })
// };

// getCatFacts1();

// //-----------------------------------------------
// // Time for bonus points! Rewrite it into arrow functions:

// function getCatFacts2() {
//     fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
//     .then((response) => response.json())
//     .then((results) => console.log(results.length))
//     .catch((error = "API Call failed") => 
//         console.log(error))
// };

// getCatFacts2();


//-----------------------------------------------
// Practicing API calls from lesson 3.4 

// const elephantURL = "https://elephant-api.herokuapp.com/elephants";
// const proxy = "https://noroffcors.herokuapp.com/";

// const corsFix = proxy + elephantURL;

// const elephantDiv = document.querySelector(".elephantDiv");

// async function elephantAPICall(){
//     try {
//       const response = await fetch (corsFix);
//       const result = await response.json();
//       console.log(result);
//       elephantDiv.innerHTML = "Elephant success"
//     } catch (error) {
//         console.log(error);
//         elephantDiv.innerHTML = "Elephant fail " + error;
//     };
// };

// elephantAPICall();

//-----------------------------------------------
// const newAPIKey = "Placeholder value"

// const newURL = `https://api.spoonacular.com/recipes/716429/information?apiKey=${newAPIKey}&includeNutrition=true`;

// async function getDataInit() {
//     const response = await fetch(newURL);
//     const data = await response.json();
//     console.log(data);
// };

// getDataInit();

//-----------------------------------------------
// Lesson 3.4 Task 

// Question 1

// console.log("------Task 3.4 Q1------")

// const CORS_URL = "https://noroffcors.herokuapp.com/";
// const API_URL = "https://elephant-api.herokuapp.com/elephants";
// const fixedURL = CORS_URL + API_URL;

// async function getElephants() {
//   const response = await fetch(fixedURL);
//   const results = await response.json();
//   console.log(results);
// }

// getElephants();

// Question 2
// const object = {
//     method: "GET",
//     headers: {
// 		'X-RapidAPI-Key': 'cf20291d03msh606de863d9eeba0p10f22cjsnad6391b44ddc',
// 		'X-RapidAPI-Host': 'urban-dictionary7.p.rapidapi.com'
//     }
// }

// const API_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

// async function callUrbanDictionary() {
//   const response = await fetch(API_URL);
//   const results = await response.json();
//   console.log(results);
// }

// callUrbanDictionary();

// Bad result because I can't find the correct key in RapidAPI, 
// but the method is correct

//-----------------------------------------------
// Lesson 4.2 Task 

const url = "https://breakingbadapi.com/api/characters/6";
const characterBox = document.querySelector(".task-four-two");

async function displayCharacter() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        const charData = json[0];
        characterBox.innerHTML = 
                                `<h4>Name: ${charData.name}</h4>
                                <img src="${charData.img}" alt="${json.name}">
                                <p>Status: ${charData.status}</p>`;
    } catch (error) {
        characterBox.innerHTML = `<h4>${error}</h4>`;
    }
};

displayCharacter();