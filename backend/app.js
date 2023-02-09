require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();

config(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
