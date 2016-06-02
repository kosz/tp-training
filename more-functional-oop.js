function makeAnimal() {

  this.animalSound = '';

  let self = this;
  self.jump = function () {
    console.log('Sound: ' + this.animalSound);
  }

  self.makeSound = function () {
    console.log('Animal Jumps');
  }

  return self;
}

let animal = makeAnimal();

animal.makeSound();
animal.jump();
