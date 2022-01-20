const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const authRouter = require('./routes/auth-router');

const server = express();
const {
  SERVER_PORT,
} = process.env;

// Middlewares
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use(express.json());

// Response handlers
server.use('/api/auth', authRouter);

server.listen(SERVER_PORT, () => {
  console.log(`puslapis veikia ant http://localhost:${SERVER_PORT}/`);
});
