/**
 * Adds two numbers together
 * @param {number} num1 - first number 
 * @param {number} num2 - second number
 * @returns sum of num1 and num2
 *  
 * @example
 * // Enter two numbers, which are added together.
 * addNum(1,2);
 * // Returns 3
 */
function addNum(num1, num2) {
    return num1 + num2;
}

//Testing classes below:

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName  = lastName;
    }

    speak(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

  }

const vegard = new Person("Vegard", "Maaø");
vegard.speak();

  // Testing filters
const games = [
  { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
  { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
  { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
  { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
  { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

const filteredGames = games.filter((game) => game.isMultiplayer === true && game.rating >= 8);
console.log(filteredGames);