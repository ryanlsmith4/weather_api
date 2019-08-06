// eslint-disable-next-line prefer-destructuring
const LocalStorage = require('node-localstorage').LocalStorage;

const localStorage = new LocalStorage('./scratch');

const inputMood = (req, res) => {
  const { mood } = req.body;
  const city = localStorage.getItem('city');
  const weather = localStorage.getItem('weather')

  const moodText = `When it's ${weather} in ${city}, you are usually ${mood}`;
  res.render('index', { current_mood: moodText });
};

module.exports = {
  inputMood,
};
