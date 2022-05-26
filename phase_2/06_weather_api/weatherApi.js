const got = require('got');
const apiKey = require('./apiKey');

class WeatherApi {
  
  constructor() {
    this.apiKey = require('./apiKey');
  }

  fetchWeatherData(city, callback) {
    got(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then((response) => JSON.parse(response.body))
    .then(callback);
  }

}

// const api = new WeatherApi();

// api.fetchWeatherData('Barcelona', (weatherData) => {
//   console.log(weatherData.main.temp);
// });

module.exports = WeatherApi;
