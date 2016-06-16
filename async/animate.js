// in node es6 module loader is not fully implemented
// this is available in TypeScript, Babel and other transpilers
// under those transpilers the syntax would be :
//  export function $animate
// however under node v 6.0 we need to use 
//  module.exports 
module.exports = function $animate (data, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('animating', data);
      resolve(data);
    }, 1000);
  });
}
