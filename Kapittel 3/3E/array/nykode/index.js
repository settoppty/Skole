
//concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log('concat():', array3);

// join()
const elements = ['Fire', 'Air', 'Water'];
console.log('join()', elements.join('-'));

// slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('slice():', animals.slice(2));

// array iterator methods

//  forEach()
const items = ['item1', 'item2', 'item3'];
items.forEach(item => {
    console.log('forEach():', item);
});

// map()
const numbersMap =[1, 4, 9];
const roots = numbersMap.map(Math.sqrt);
console.log('map():', roots);

// filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log('filter():', result);

// reduce()
const numsReduce = [1, 2, 3, 4];
const sum = numsReduce.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('reduce():', sum);