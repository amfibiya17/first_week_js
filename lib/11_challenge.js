// Let's go back to our candy promotion texts. 
// Your friend now wants to have a specific discount percentage for each customer. 
// After processing the list you're given, you end up with the following array:

// To complete this exercise, you'll have to:
// Use Array's map method again.
// Access the properties of an object as seen previously.

// Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.
// Once your function is written, you should be able to type the following code and have the exact same output:

// > generateMessages(namesAndDiscounts);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 40% off our best candies for you today!',
//   'Hi Josh! 30% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 60% off our best candies for you today!'
// ]

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];

function generateMessages({ name, discount }) {
  return `Hi ${name}! ${discount}% off our best candies for you today!`;
}

const messagesToClients = namesAndDiscounts.map(generateMessages);
console.log(messagesToClients);
