function Animal(config) {

  let self = this;
  self.animalSound = config.animalSound;


}

const firstAnimalFeaturesThatIThoughtOf = {
  jump: function () {
    console.log('Animal Jumps');
  },

  makeSound: function () {
    console.log('Sound: ' + this.animalSound);
  }
};

Object.assign(Animal.prototype, firstAnimalFeaturesThatIThoughtOf);

let animal = new Animal({
  animalSound: 'miaow'
});

animal.makeSound();
animal.jump();

//let cat = makeAnimal({
//  animalSound: 'purr'
//});
//
//cat.makeSound();
//
//cat.moreStuffOnCat = function () {
//
//};
//
//let someNewCat = Object.assign({}, cat);
