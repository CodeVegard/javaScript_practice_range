// /**
//  * Adds two numbers together
//  * @param {number} num1 - first number 
//  * @param {number} num2 - second number
//  * @returns sum of num1 and num2
//  *  
//  * @example
//  * // Enter two numbers, which are added together.
//  * addNum(1,2);
//  * // Returns 3
//  */
// function addNum(num1, num2) {
//     return num1 + num2;
// }

// //Testing classes below:

// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName  = lastName;
//     }

//     speak(){
//         console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }

//   }

// const vegard = new Person("Vegard", "Maaø");
// vegard.speak();

//   // Testing filters
// const games = [
//   { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
//   { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
//   { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
//   { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
// //   { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
// // ];

// const filteredGames = games.filter((game) => game.isMultiplayer === true && game.rating >= 8);
// console.log(filteredGames);

// Testing reduce();

// const products = [
//   { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
//   { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
//   { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
//   { title: 'Egg', inStock: true, quantity: 12, price: 5 },
// ];


// const sum = products.reduce((total, product) => {
//   if (product.inStock){
//     total += product.price * product.quantity;
//   }
//   return total;
// }, 0);
// console.log(sum);

// const refractored = products.reduce((total, product) => product.inStock ? (total += product.price * product.quantity) : total, 0);
// console.log(refractored);

// Testing find and findIndex:

// const books = [
//   { title: 'Building a Spaceship', inStock: false },
//   { title: 'Growing Orchids', inStock: false },
//   { title: 'River Fisher', inStock: false },
// ];

// const foundBook = books.find((book) => book.inStock);
// console.log(foundBook);

// Testing some(); and every();

// const modules = [
//   { name: 'Introduction to Programming', isComplete: true },
//   { name: 'HTML', isComplete: true },
//   { name: 'CSS', isComplete: false },
//   { name: 'JavaScript', isComplete: true },
// ];
// const hasAllModuleBeenFinished = modules.every((mod) => mod.isComplete);
// console.log(hasAllModuleBeenFinished);

// Testing for in loops
const person = {
  firstName: 'Ola',
  lastName: 'Nordmann',
  module: 'JavaScript',
};
const keysAndValueAsArray = Object.keys(person).map((key) => {
  return `key: ${key}, value: ${person[key]}`;
})
console.log(keysAndValueAsArray)