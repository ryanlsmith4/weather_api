const router = require('express').Router();

const { getWeather, recieveWeather } = require('../controllers/weather');

router.route('/weather')
  .get(getWeather)
  .post(recieveWeather);

module.exports = router;
