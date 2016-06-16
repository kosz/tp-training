const $http = require('./http');
const $animate = require('./animate');
const $success = require('./success');

let receivedData = '';

// this is a promise chain
$http('localhost:3003')
  // it allows async code to be written and read line by line
  // without producing callback hell
  .then($animate)
  // then receives a function reference which will execute at a later time
  // after the previous promise resolves
  .then($success)
  // then can receive a second parameter, which is a callback function 
  // that can handle errors
  // ideally however, we can just use .catch at the end of the promise chain
  .then(() => console.log('ok now everything really finished executing'))
  // .catch(errorHandlerFunction) can also be written as :
  // .then(null, errorHandlerFunction);
  .catch((error) => console.log('error:', error));

console.log('starting with receivedData BEFORE calling $http', receivedData);


