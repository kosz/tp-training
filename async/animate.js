export default function $animate (data, callback) {
  setTimeout(() => {
    console.log('animating', data);
    callback();
  }, 1000);
}
