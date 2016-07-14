'use strict';

// function Observable() {
//   let self = this;
//   let value;
//   let subscribers = [];
//
//   self.subscribe = function(fn) {
//     subscribers.push(fn);
//   };
//
//   self.setValue = function(val) {
//     value = val;
//     subscribers.forEach(function(fun) {
//       fun(val);
//     });
//   }
//
// }

class Observable {

  constructor() {
      this.value = {};
      this.subscribers = [];
  }

  setValue(val) {
    this.value = val;
    this.subscribers.forEach(function(fun) {
      fun(val);
    });
  }

  subscribe(fn) {
  this.subscribers.push(fn);
  }

}

let obs = new Observable();

class Controller {
  constructor() {
      this.hello = "hello";
      //obs.subscribe(this.observer.bind(this));
      obs.subscribe(this.observer.bind(this));
      // when passing a function to another function
      // expecting the passed function to be executed later on in another
      // execution context, then the `this` referece inside the passed function
      // will be lost, unless if we specifically bind the function's `this`
      // to a certain object, in this case `this`

      // javascript provides 3 ( now 4 ) methods to get around this
      // the .bind function
      // the .call function
      // the .apply function
      // and now-a-days the arrow function
      // an arrow function will ALWAYS keep it's `this` bound to it's oringinal
      // context

      // in ES/TS it is a good idea, to not use instance methods EVER
      // instead, write them as instance properties, containing arrow functions
      // this way, if you pass the function to another function to be called
      // the function does not loose it's reference to `this`
  }

  // when defined as a function ( non arrow function )
  // the `this` value inside will reflect the current exeuction context
  // you are not guarnateed in javascript that the `this` inside a
  // class's function will remain a reference to the instance of that class
  // unless, if you use .bind(this), on the function before passing it

  // keep in mind that .bind(this) will actually return a NEW function
  observer = (value) => {
    console.log(`${this.hello} ${value}`);
  }

}

let ctrl = new Controller();

function observer1 (val) {
  console.log('observer 1 reacting', val);
}

function observer2 (val) {
  console.log('observer 2 reacting', val);
}

obs.subscribe(observer1);
obs.subscribe(observer2);

obs.setValue('Hallo');
//
// function($scope, userReactiveStore) {
//   userReactiveStore.subscribe(function(val) {
//     $scope.user = val;
//   });
//
//
