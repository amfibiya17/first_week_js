// 09_arrays

const numbers = [1, 2, 3, 4];

const newNumbers = numbers.concat(5); // it adds an element and returns a new array

// We can access elements with []
console.log(numbers); // to access all the array
console.log(numbers[1]); // to access the 2nd element in array
console.log(newNumbers); // to access new array
console.log(numbers.length); // returns 4
console.log(newNumbers.length); // returns 5

numbers.forEach((number) => {
  console.log(number + 5); // looping through the array and execute code for each element
})
