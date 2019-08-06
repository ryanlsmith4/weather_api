
const apiKey = process.env.WEATHER_API;

const request = require('request');

const getWeather = (req, res) => res.render('index');

const recieveWeather = (req, res) => {
  const { city } = req.body;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  request(url, (err, response, body) => {
    if (err) {
      res.render('index', { weather: null, error: 'Error, please try again' });
    } else {
      const weather = JSON.parse(body);
      if (weather.main === undefined) {
        res.render('index', { weather: null, error: 'Error, please try again' });
      } else {
        const weatherText = `${weather.weather[0].description} and it's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', { weather: weatherText, error: null });
      }
    }
  });
};


module.exports = {
  getWeather,
  recieveWeather,
};
