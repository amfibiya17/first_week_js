// 05_conditionals

// Use brackets () to enclose the condition.
// Use curly braces {} to enclose the code "body" executed following this condition.


// Define a function getNumberSign that takes a number 
// and returns either 'zero', 'positive' or 'negative' depending on its sign
const getNumberSign = (number) => {
  if (number > 0) {
    return 'positive';
  } else if (number === 0) {
    return 'zero';
  } else {
    return 'negative';
  }
}
console.log(getNumberSign(5)); // <- checking in node 05_conditionals.js

module.exports = getNumberSign; // <- checking outside file
