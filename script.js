// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Define the Dog class extending Animal
class Dog extends Animal {
  // Method to bark
  bark() {
    console.log("woof");
  }
}

// Define the Cat class extending Animal
class Cat extends Animal {
  // Method to purr
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
