module.exports = function adsf(data) {
  return new Promise((resolve, reject) => {
    console.log('success', data);    
    resolve(data);
  });
}
