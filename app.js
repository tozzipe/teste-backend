const express = require('express');
const bodyParser = require('body-parser');

const appRoutes = require('./routes/appRoutes');
const app = express();


require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', async (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  };
  res.status(200).send(data);
});

appRoutes(app);

module.exports = app;
