'use strict';

const doer = function(fn) {
  const info = { ip: '878.123.001.257', createdAt: new Date() };
  fn(info);
};

doer(function(info) {
  const whatAmIDoing = 'logging stuff';
  console.log('Stuff being done by IP: ' +
        info.ip + ' | ' + ' created at ' + 
        info.createdAt + ' what I did : ' +
        whatAmIDoing);
});
doer(function(info) {
  const whatAmIDoing = 'logging other stuff';
  console.log('Stuff being done by IP: ' +
        info.ip + ' | ' + ' created at ' + 
        info.createdAt + ' what I did : ' +
        whatAmIDoing);
});

function printWhatImDoing(msg) {

}

doer(printWhatImDoing('logging stuff'));
doer(printWhatImDoing('logging other stuff'));

