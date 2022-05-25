// Create an array of all numbers from 1 to 10. 
// Calculate the sum of all these numbers by looping through the array.

// You can use the method forEach to iterate over each element.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// looping using for loop
function sumNum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumNum(numbers));


// using forEach method
let sum = 0;
numbers.forEach((number) => {
  sum += number;
})
console.log(sum);
