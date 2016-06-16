
function $http(url, callback) {
  // use your imagination 
  // and think of this as a server side call which returns at a later time

  setTimeout(() => {
    let mockData = {
      a: 'one',
      b: 'two'
    };

    callback(mockData);

    console.log(`url was hit ${url}`);
    return mockData;
  }, 2000);
}


let receivedData = '';
$http('localhost:3003', function(data) {
  receivedData = data;
  console.log('receivedData', receivedData);
});

function $animate (data, callback) {
  setTimeout(() => {
    console.log('animating', data);
    callback();
  }, 1000);
}


console.log('starting with receivedData BEFORE calling $http', receivedData);


$animate(receivedData, function() {
  console.log('everything finished executing');
});
