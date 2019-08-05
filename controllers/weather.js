// const dotenv = require('dotenv');
// dotenv.config();

const appID = process.env.WEATHER_API;
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?APPID=${appID}`



const getWeather = (req, res) => {
        console.log('Here');
        return res.render('index');
};

const recieveWeather = (req, res) => {
    const city = req.body.city;
    console.log(appID)
    console.log(city)
    res.send('Gottem');
};

// const query = `&q=${cityName},${country}`;
 



module.exports = {
    getWeather,
    recieveWeather
}