const router = require('express').Router();


const { inputMood } = require('../controllers/mood');

router.route('/weather/mood')
  .post(inputMood);

module.exports = router;
