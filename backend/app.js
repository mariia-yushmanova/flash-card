require('dotenv').config();
const express = require('express');
const config = require('./config/config');

const app = express();

config(app);

const PORT = process.env.PORT || 4000;

const apiCardsRoute = require('./routes/cards.routes');
const apiThemesRoute = require('./routes/themes.routes');

app.use('/api/cards', apiCardsRoute);
app.use('/api/themes', apiThemesRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
