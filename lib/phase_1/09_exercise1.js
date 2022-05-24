// Create an array of a few names of people you know and:

// Print the array's length.
// Print the second name of the array.
// Create a new array by adding a new name to the existing array.

const names = ['Stevie', 'Laura', 'Luke', 'Alex', 'George'];

console.log(names); // ['Stevie', 'Laura', 'Luke', 'Alex', 'George']
console.log(names.length); // 5
console.log(names[1]); // Laura

const newNames = names.concat('Eoin');
console.log(newNames); // ['Stevie', 'Laura', 'Luke', 'Alex', 'George', 'Eoin']
