'use strict';
let factory = function () {

  // this is protected by it's closure, it can't be edited from outside
  let prive = '';

  return {
    getValue: function() { return prive; },
    setValue: function(v) { 
      if (v !== 0) {
        prive = v; 
      }
    }
  }

};

let obj = factory();
obj.prive = 5;
console.log(obj.getValue());
