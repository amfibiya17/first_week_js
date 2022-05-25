const got = require('got');

function handleReceivedResponse(response) {
  const responseObject = JSON.parse(response.body);
  console.log(responseObject);
}

got('https://api.github.com/repos/amfibiya17/first_week_js').then(handleReceivedResponse);
