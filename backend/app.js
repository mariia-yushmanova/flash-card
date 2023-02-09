require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./config/session');

const app = express();

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

const apiCardsRoute = require('./routes/cards.routes');
const apiThemesRoute = require('./routes/themes.routes');
const apiAuthRoute = require('./routes/auth.routes');

app.use('/api/cards', apiCardsRoute);
app.use('/api/themes', apiThemesRoute);
app.use('/api/auth', apiAuthRoute);

app.listen(PORT, () => {
  console.log(`Сервер запущу на ${PORT}щу`);
});
