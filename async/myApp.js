const $http = require('./http');
const $animate = require('./animate');
const $success = require('./success');

// callback hell
// pyramid of doom
// this code doesn't even handle errors and it's already hard to
// maintain, read, understand

let receivedData = '';
//function callback(data) {
//  receivedData = data;
//  console.log('receivedData', receivedData);
//  $animate(receivedData, function() {
//    console.log('everything finished executing');
//    $success(receivedData, () => {
//      console.log(`ok now i'm really finished`);
//    });
//  });
//}

$http('localhost:3003')
  .then((data) => {
    receivedData = data;
    console.log('receivedData =', data);
  });;

console.log('starting with receivedData BEFORE calling $http', receivedData);


