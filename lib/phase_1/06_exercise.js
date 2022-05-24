// Use a for loop to iterate numbers from 1 to 20, and for each of them, 
// print whether the number is even or odd.

// with while 
let i = 1

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }

  i += 1;
}


// with for
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}


// to make a function 
const getNumbers = (number) => {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

for (let i = 1; i <= 20; i++) {
  const numbers = getNumbers(i);
  console.log(`${i} is ${numbers}`)
}
