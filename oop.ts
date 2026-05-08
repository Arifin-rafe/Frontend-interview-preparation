class Animal {
    name: string;
    species: string;
    sound: string
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("Buddy", "Dog", "Woof");
const cat = new Animal("Ziggy", "Cat", "Meow");
const sound = dog.makeSound();
console.log(dog);
console.log(dog.sound);

