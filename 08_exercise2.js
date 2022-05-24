// Declare a function executeAfterDelay which calls the given function after the given delay in seconds

function executeAfterDelay(delay, callbackFunction) {
  setTimeout(callbackFunction, delay * 1000);
}

function printHello() {
  console.log('Hello there!');
}

executeAfterDelay(5, printHello);
