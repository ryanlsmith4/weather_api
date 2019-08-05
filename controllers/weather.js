// const dotenv = require('dotenv');
// dotenv.config();

const apiKey = process.env.WEATHER_API;
// const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?APPID=${appID}`

const request = require('request');

const getWeather = (req, res) => {
        // console.log('Here');
        return res.render('index');
};

const recieveWeather = (req, res) => {
    // console.log(req)

    const city = req.body.city
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    
    request(url, function (err, response, body) {
        // console.log(response)
        if (err) {
            res.render('index', { weather: null, error: 'Error, please try again' });
        } else {
            let weather = JSON.parse(body);
            if (weather.main == undefined) {
                res.render('index', { weather: null, error: 'Error, please try again' });
            } else {
                console.log('HERE')
                console.log(weather)
                let weatherText = `There are ${weather.weather[0].description} and it's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', { weather: weatherText, error: null });  
            }
        }
    })
};

// const query = `&q=${cityName},${country}`;
 



module.exports = {
    getWeather,
    recieveWeather
}