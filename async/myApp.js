const $http = require('./http');
const $animate = require('./animate');
const $success = require('./success');

// callback hell
// pyramid of doom
// this code doesn't even handle errors and it's already hard to
// maintain, read, understand

let receivedData = '';
$http('localhost:3003', function(data) {
  receivedData = data;
  console.log('receivedData', receivedData);
  $animate(receivedData, function() {
    console.log('everything finished executing');
    $success(receivedData, () => {
      console.log(`ok now i'm really finished`);
    });
  });
});

console.log('starting with receivedData BEFORE calling $http', receivedData);


