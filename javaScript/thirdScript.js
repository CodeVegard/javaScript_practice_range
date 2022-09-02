// Freecodecamp Basic Javascript and Data Structures

const pet = {
  type: "cat",
  name: "Loppa",
  age: 1,
  isFriendly: true,
  sayHello: function(){
    console.log("Hello, my name is " + this.name);
  }
};

// Testing imports from fourth.js:

import { myVar } from "./fourth.js"
// the  syntax is ./ because it's the same folder as my current file.
console.log(myVar);


// localStorage practice:

const newVar = "New variable, localStorage testing";

window.localStorage.setItem("variable in local storage", newVar);
localStorage.setItem("new variable in local storage", "asdasd");

const anotherVariable = localStorage.getItem("new variable in local storage");
console.log(anotherVariable);


const person = {
  name: "Obaseki Nosa",
  location: "Lagos",
}
window.localStorage.setItem('user', JSON.stringify(person));

let locallyStoredPerson = localStorage.getItem("user");
console.log(typeof locallyStoredPerson); // string

let parsedPerson = JSON.parse(locallyStoredPerson);
console.log(typeof parsedPerson); // object

// Here's a codealong from JavaScript Module 1, lesson 4
// Let's make a simple age checker

const input = document.querySelector("input");
const button = document.querySelector("button");

button.onclick = function(){
  const age = input.value;
  const isAgeOk = isOldEnough(age);

  console.log(isAgeOk);
  if (isAgeOk){
    console.log("Old enough, entering site")
    document.location.href="index.html";
  } else {
    console.log("Not old enough, blocked")
  }
}

function isOldEnough(ageToCheck){
  if(ageToCheck >= 13){
    return true
  } return false
}