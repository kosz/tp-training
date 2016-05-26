'use strict';

function Observable() {
  let self = this;
  let value;
  let subscribers = [];

  self.subscribe = function(fn) {
    subscribers.push(fn); 
  };

  self.setValue = function(val) {
    value = val;
    subscribers.forEach(function(fun) {
      fun(val);
    });
  }

}

let obs = new Observable();

function observer1 (val) {
  console.log('observer 1 reacting', val);
}

function observer2 (val) {
  console.log('observer 2 reacting', val);
}

obs.subscribe(observer1);
obs.subscribe(observer2);

obs.setValue('Hello');
//
// function($scope, userReactiveStore) {
//   userReactiveStore.subscribe(function(val) {
//     $scope.user = val;
//   });
//
// 
