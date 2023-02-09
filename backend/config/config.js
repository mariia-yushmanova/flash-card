const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { resLocals, getUser } = require('../middleware/auth');
const sessionConfig = require('./session');

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cors(corsOptions));
  app.use(session(sessionConfig));
  app.use(cookieParser());
  app.disable('x-powered-by');
  app.use(resLocals);
  app.use(getUser);
};

module.exports = serverConfig;
