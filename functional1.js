'use strict';
let rez = a(1)(2)(3);

// write functions that return other functions
function a(nr) {
  return function(nr1) {
    return function(nr2) {
      return nr + nr1 + nr2;
    }
  }
}

console.log(rez);
