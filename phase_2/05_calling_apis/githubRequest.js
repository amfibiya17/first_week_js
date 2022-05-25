const got = require('got'); // <- Load the `got` function

function handleReceivedResponse(response) { // <- Create a "handler" callback function
  console.log(response.body);
}

const url = 'https://api.github.com/repos/sinatra/sinatra';

// Call `got` and provide the handler callback function
// This will get called by `got` when the response is received
got(url).then(handleReceivedResponse);


got(url) // <- We can also rewrite the above using a shorter version, by defining the "handler" function as an anonymous function
.then((response) => {
  console.log(response.body);
})

// If we want to convert the string data into a JavaScript object so it is formatted properly, we can do this using JSON.parse
const stringValue = '{ "name": "Slava" }';
const objectValue = JSON.parse(stringValue);

console.log(objectValue); // <- { name: 'Slava' }

console.log(objectValue.name); // <- can access properties like a regular JS object