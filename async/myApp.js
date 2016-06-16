const $http = require('./http');
const $animate = require('./animate');
const $success = require('./success');

let receivedData = '';

$http('localhost:3003')
  .then($animate)
  .then($success)
  .then(() => console.log('ok now everything really finished executing'));

console.log('starting with receivedData BEFORE calling $http', receivedData);


