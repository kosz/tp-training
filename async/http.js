module.exports = function $http(url) {
  // use your imagination 
  // and think of this as a server side call which returns at a later time

  const promiseConstructorParameter = (resolve, reject) => {
    setTimeout(() => {
      let mockData = {
        a: 'one',
        b: 'two'
      };

      resolve(mockData);
      console.log(`url was hit ${url}`);
    }, 2000);

  };

  // the Promise object is instantiated with a function
  // this function will be passed 2 parameters by the Promise constructor
  // first parameter: resolve, can be called to resolve the promise
  // second parameter: reject, can be called to reject the promise
  return new Promise(promiseConstructorParameter);

}


