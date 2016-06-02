'use strict';

function Animal() {
  this.animalSound = '';
}

Animal.prototype.makeSound = function() {
  console.log('Sound: ' + this.animalSound);
};

Animal.prototype.jump = function() {
  console.log('Animal Jumps');
};

let animal = new Animal();
animal.makeSound();
animal.jump();
