// In this challenge you'll need to use the function setInterval. 
// It works the same way as setTimeout, but rather than executing the given function once after a delay, it executes it repeatedly. 

// Declare a variable counter initialised at the value 0 — this value will need to change, so use let rather than const.

// Declare a function called increment that:
// increments the value of counter by 1
// and prints it using console.log

// Using setInterval, call this function every second so the counter is incremented and printed every second.

counter = 0;

function increment() {
  console.log(counter);
  counter += 1;
}

setInterval(increment, 2000);
