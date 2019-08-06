// Dependencies
const express = require('express');

const app = express();

const exphbs = require('express-handlebars');

require('dotenv').config();

const weatherRoute = require('./routes/weather_routes');

const moodRoute = require('./routes/mood');

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', weatherRoute, moodRoute);

const { PORT } = process.env;


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server Listening on ${PORT}`);
});
