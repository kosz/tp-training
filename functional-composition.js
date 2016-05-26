'use strict';

function logCompose(logger, fn) {
  return function() {
    let res = fn.apply(null, arguments);
    logger('result is', res);
    return res;
  }
}

function sum(a, b) {
  return a + b;
}

const composedLogAndSum = logCompose(console.log, sum);

let finalResult = composedLogAndSum(1, 2);
console.log('final result : ', finalResult);

// danger zone
// don't really do this
let obj = {
  getDate: function() {
    return new Date();
  }
};

obj.getDate = logCompose(console.log, obj.getDate);

obj.getDate();
// end of danger zone
