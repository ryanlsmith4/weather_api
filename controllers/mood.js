const inputMood = (req, res) => {
  const { mood } = req.body;
  const moodText = `your mood in this weather is ${mood}`;
  res.render('index', { current_mood: moodText });
};

module.exports = {
  inputMood,
};
