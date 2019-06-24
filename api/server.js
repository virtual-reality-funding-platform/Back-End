const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routes/users-router.js');
const authRouter = require('../routes/auth/auth.js')
const projectsRouter = require('../routes/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/users', usersRouter);
server.use('/auth', authRouter);
server.use('/projects', projectsRouter);

server.get('/', (req,res) => {
  res.send("Oh hey there! I'm the server!");
});

module.exports = server;