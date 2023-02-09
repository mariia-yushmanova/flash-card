require('dotenv').config();
const express = require('express');
const config = require('./config/config');
const mainRout = require('./routes/main.routes');

const app = express();

config(app);

const PORT = process.env.PORT || 4000;

app.use('/api', mainRout);

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
