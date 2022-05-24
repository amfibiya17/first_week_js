// 04_functions

// We can define a function with the following syntax 
// (a function is the same thing as a Ruby "method", 
// but it lives on its own, without being attached to a specific object):

// 1. This function accepts no arguments
const printMessage = () => {
  console.log('Hi there!');
}
printMessage();

// 2. This function accepts one
const printMessageAgain = (message) => {
  console.log(message);
}
printMessageAgain('Hi there!');

// In JavaScript, we *have* to use `return`, otherwise nothing will be returned
const getName = () => {
  return `Slava`;
}
getName();

// creating function myFunction
const myFunction = () => {
  console.log(`Hello`);
}
myFunction();

// creating function hello with 1 argument
const helloOne = (name) => {
  return `Hello ` + name;
}
helloOne(`Slava`);

// creating function sayHello with ${name}
const sayHello = (name) => {
  return `Hello ${name}`;
}
sayHello('Slava');

// In JavaScript, to use a function outside of the file it is defined in, 
// we need to "export" it using module.exports:
const hello = () => {
  console.log(`Hello!`);
}
module.exports = {printMessage, printMessageAgain, myFunction, hello, helloOne, sayHello}; // <- to be able to call function outside file
// Put this where you need to call the function
// const hello = require('./04_functions'); <- where you call it
