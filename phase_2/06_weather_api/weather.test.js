const Weather = require('./weather');

describe('Weather', () => {

  it('gets the weather data fetched by Api class for given city', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback) => callback({
        name: 'Barcelona',
        weather: '30 degrees'
      })
    };
    const weather = new Weather(mockedApi);

    weather.fetch('Barcelona');

    expect(weather.getWeatherData()).toEqual({
      name: 'Barcelona',
      weather: '30 degrees'
    })
  })

  it('prints formatted breakdown of the weather for the given city', () => {
    const mockedApi = {
      fetchWeatherData: (city, callback) => callback({
        name: 'Barcelona',
        weather: [{ main: 'Clear' }],
        main: {
          temp: '24.5',
          humidity: '44'
        },
      })
    };
    const weather = new Weather(mockedApi);

    weather.fetch('Barcelona');

    expect(weather.displayWeather()).toEqual(
    'Place: Barcelona\nWeather: Clear\nTemperature: 24.5\nHumidity: 44'
    );
  })

});