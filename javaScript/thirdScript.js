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