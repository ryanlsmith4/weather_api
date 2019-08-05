// Dependencies
const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const exphbs = require('express-handlebars');

require('dotenv').config();

const weather_route = require('./routes/weather_routes') 

// const dotenv = require('dotenv');

// dotenv.config();


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use('/api', weather_route)

const PORT = process.env.PORT;



// app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
  });