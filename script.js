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
// const person = {
//   firstName: 'Ola',
//   lastName: 'Nordmann',
//   module: 'JavaScript',
// };
// const keysAndValueAsArray = Object.keys(person).map((key) => {
//   return `key: ${key}, value: ${person[key]}`;
// })
// console.log(keysAndValueAsArray)

// Testing chaining

// const students = [
//   { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
//   { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
//   { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
//   { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
//   { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
//   { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
//   { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
//   { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
//   { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
//   { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
// ];

// const result = students
//   // Get only the students >= 30 and that are online
//   .filter((student) => {
//     if (student.age >= 30 && student.isOnline === true) {
//       return true;
//     }
//   })
//   // Reduce all of the student's averages to a class average
//   .reduce((classAverage, student, index, studentsArray) => {
//     // Reduce all of the student's results to a single average
//     const studentsTotalMarks = student.results.reduce(
//       (studentAverage, result, index, resultsArray) => {
//         studentAverage += result / resultsArray.length;
//         return studentAverage;
//       },
//       0,
//     );
//     // Add the average of the student to the class average
//     classAverage += studentsTotalMarks / studentsArray.length;
//     return classAverage;
//   }, 0);

//   console.log(result);
//   // logs 73.72



// Async Code:
// function funk(callbackFunk) {
//   console.log(callbackFunk);
// };

// function newFunk() {
//   console.log("This is text");
// };

// funk(newFunk);

// Promises:

const myPromise = new Promise ((resolve, reject) => {
  const shouldResolve = true;
  
  if (shouldResolve){
    resolve('Promise resolved');
  } else {
    reject('Promise rejected');
  }
});

myPromise.then((result) => {
  console.log(result);
});