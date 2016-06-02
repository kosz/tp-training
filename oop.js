'use strict';

class Animal {
  constructor() {
    this.animalSound = '';
  }

  makeSound() {
    console.log('Sound: ' + this.animalSound);
  }

  jump() {
    console.log('Animal jumps');
  }
}

let animal = new Animal();
animal.makeSound();
animal.jump();

class Cat extends Animal {
  constructor() {
    super();
    this.animalSound = 'purr';
  }
}

let cat = new Cat();
cat.makeSound();
cat.jump();


console.log(Cat.prototype.jump);
