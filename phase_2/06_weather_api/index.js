const got = require('got');
const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed';
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;