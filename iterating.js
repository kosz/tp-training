let list = [
  1,
  2,
  3,
  4,
  5,
];

for(let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

list.forEach(console.log);

let filtered = list.filter(function(item) {
  return item < 4;
});

console.log('filtered', filtered);

let newMap = list.map(item => `<p>${item}</p>`);

console.log('transformed array', newMap);

let reducedSum = list.reduce((prev, curr) => prev + curr);

console.log('sum', reducedSum);


// take all numbers smaller than 4
// add 5 to all of them
// return the sum of what's left
//


let finalValue =
  list
    .filter(item => item < 4)
    .map(item => item + 5)
    .reduce((prev, curr) => prev + curr);
console.log('final value', finalValue);



let listOfProducts = [
  { name: 'TV', price: '99.99.99' , type: 'electronics' },
  { name: 'Sound System', price: '99.89', type: 'electronics' },
  { name: 'Computer', price: '199.89', type: 'electronics' },
  { name: 'Desk', price: '19.89', type: 'furniture' },
];

let buildProductTemplate = (product) => {
  return `
    <p>Name ${product.name}</p>
    <p>Price ${product.price}</p>
  `;
}

// get a single html string which prints all electronic product
let electronicList =
  listOfProducts
    .filter(item => item.type == "electronics")
    .map(item => buildProductTemplate(item))
    .reduce((prev,curr) => prev + curr);
console.log(electronicList);
