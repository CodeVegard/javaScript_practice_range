function createAnimal(species, pronouns, name, food) {
    return {
        species: species,
        pronouns: pronouns,
        name: name,
        food: food,
        describe: function() {
            console.log(`${name} is a ${species}, and ${pronouns} eats ${food}. I love them`);
        }
    }
}

const loppa = createAnimal("cat", "he", "Loppa", "cat food");
const effie = createAnimal("dog", "she", "Effie", "dog food");

loppa.describe();
effie.describe();