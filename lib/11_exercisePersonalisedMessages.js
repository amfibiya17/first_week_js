// Your friend now would you like to also generate a personalised message 
// for the SMS promotion. 
// Along with the phone numbers, you also now have a list of names:
// > const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// To complete this exercise you'll have to:

// create a function that takes a single name and generate the correct message for it.
// use Array's map method to generate the list of personalised messages using this function.

// Write a function generateMessages that takes an array of names and returns an array 
// of personalised messages for each name. 
// For example, when given the array above, the function should return an array 
// with the first element being the string 'Hi Anna! 50% off our best candies for you today!', 
// the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.
// Once your function is written, you should be able to type 
// the following code and have the exact same output:

// > const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// > generateMessages(names);
// [
//   'Hi Anna! 50% off our best candies for you today!',
//   'Hi Laura! 50% off our best candies for you today!',
//   'Hi Josh! 50% off our best candies for you today!',
//   'Hi Min! 50% off our best candies for you today!',
//   'Hi Karla! 50% off our best candies for you today!'
// ]

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

function generateMessages(name) {
  return `Hi ${name}! 50% off our best candies for you today!`;
}
const messagesToClients = names.map(generateMessages);
console.log(messagesToClients);
