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