// Write a function fizzbuzzUntil that accepts a number. 
// This function should use a loop to loop through all numbers 
// from 1 to the given one, call the fizzBuzz function for 
// the current number and print the result.

// const fizzbuzzUntil = (number) => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return 'FizzBuzz'
//   } else if (number % 3 === 0) {
//     return 'Fizz';
//   } else if (number % 5 === 0) {
//     return 'Buzz';
//   } else {
//     return (number);
//   }
// }

// for (let i = 1; i <= 30; i++) {
//   const fizzBuzz = fizzbuzzUntil(i);
//   console.log(`${fizzBuzz}`)
// }


const fizzbuzzUntil = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzbuzzUntil;

// fizzbuzzUntil(10);
