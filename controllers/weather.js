const appID = process.env.WEATHER_API;
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?APPID=${appID}`


const weather = (req, res) => {

        console.log('Here');
        // const query = `&q=${cityName},${country}`;
        return res.render('index');

}
 



module.exports = {
    weather
}