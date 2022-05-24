// 08_callbacks

// The name "callback" comes from the fact that this function's purpose 
// is to be called back by another part of the code, at a later time.

function printMessage() {
  console.log('Hello there!');
}

setTimeout(printMessage, 2000); // this function gets two arguments: 
// the function to execute after the delay 
// and the delay (in milliseconds, so in the previous example, 2 seconds)

setTimeout(() => {
  console.log('Hello there!');
}, 2000);
// The following syntax is doing the exact same thing, 
// using an anonymous function (i.e a function not bound to a name) directly

// The function given in second argument to setTimeout is an example of a callback — 
// we've declared this function, but it won't be called until setTimeout decides to call it 

// This is an example of asynchronous programming — 
// the execution of the callback function is not "in sync" 
// with the rest of the program execution, because it has a delay before being called.
