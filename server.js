// Dependencies
const express = require('express');

const app = express();

const bodyParser = require('body-parser')

const exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
//


const PORT = process.env.PORT || 3000;

const weather_route = require('./routes/weather_routes') 

// app.use(express.json());

app.use(bodyParser.json())

app.use('/api', weather_route)

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
  });