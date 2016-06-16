import $http from './http';
import $animate from './animate';

let receivedData = '';
$http('localhost:3003', function(data) {
  receivedData = data;
  console.log('receivedData', receivedData);
});

console.log('starting with receivedData BEFORE calling $http', receivedData);

$animate(receivedData, function() {
  console.log('everything finished executing');
});
