const got = require('got');
const WeatherApi = require('./weatherApi');

class Weather {

  constructor(api) {
    this.api = api;
  }

  fetch(city) {
    this.api.fetchWeatherData(city, (data) => {
      this.weatherData = data;
    });
  }

  getWeatherData() {
    return this.weatherData;
  }

  displayWeather() {
    return `Place: ${this.weatherData.name}\nWeather: ${this.weatherData.weather[0].main}\nTemperature: ${this.weatherData.main.temp}\nHumidity: ${this.weatherData.main.humidity}`;
  }

}

const api = new WeatherApi();
const weather = new Weather(api);

weather.fetch('Barcelona');

setTimeout(() => {
  console.log(weather.getWeatherData());
}, 300);

setTimeout(() => {
  console.log(weather.displayWeather());
}, 500);

module.exports = Weather;
