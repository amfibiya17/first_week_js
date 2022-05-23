// 03_variables_and_visibility

age = 34;
console.log(`I'm ` + age + ` years old!`);
age = 35;
console.log(`Now I'm ` + age + ` years old!`);

// In the node REPL, declare two variables — a with value 4 and b with value 6.
// Using console.log, print the result of:
// a + b (should print 10)
// a * b (should print 24)
a = 4;
b = 6;
console.log(a + b);
console.log(a * b);

// Can you find the problem in the following program? 
// Make the fix, so the code prints "Hello Makers" when run into node
greeting = 'Hello ';
theName = 'Makers';
console.log(greeting + theName); // <- () were missing

// creating function myFunction
const myFunction = () => {
  console.log(`Hello`);
}
myFunction();

// creating function hello with 1 argument
const hello = (name) => {
  return `Hello ` + name;
}
hello(`Slava`);

// creating function sayHello with ${name}
const sayHello = (name) => {
  return `Hello ${name}`;
}
sayHello('Slava');

module.exports = sayHello; // <- to be able to call function outside file
// const sayHello = require('./03_variables_and_visibility.js') <- where you call it
