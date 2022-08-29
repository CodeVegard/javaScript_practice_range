// Freecodecamp Basic Javascript and Data Structures

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

const newCycle = { 
  gear:2,
  setGear(newGear){
    return this.gear = newGear;
  }
};

newCycle.setGear(48);
console.log(newCycle.gear);