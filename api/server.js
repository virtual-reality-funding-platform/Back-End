const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routes/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);

server.get('/', (req,res) => {
  res.send("Oh hey there! I'm the server!");
});

module.exports = server;