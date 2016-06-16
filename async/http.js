export default function $http(url, callback) {
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


