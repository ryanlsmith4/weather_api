const router = require('express').Router();

const { weather } = require('../controllers/weather')
router.route('/weather')
// console.log(weather)
    .get(weather);

module.exports = router;