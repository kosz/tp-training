'use strict';
// everything in javascript is a map
// even a function
// everything attached to the map, will be converted toString

let a = {};
let c, d;

a['one'] = 1;
a.two = 2;

a[c] = 'hmmm';
a[d] = 'wat';

const fun = function() { console.log('nooooo'); };
fun.wat = 'ummm';

a[fun] = 'heh';
a[fun.wat] = 'hehe';

console.log(a);
console.log(fun);
