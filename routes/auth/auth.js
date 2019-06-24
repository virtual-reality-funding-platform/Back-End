const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const router = express.Router();

const Users = require('../../data/models/users.js');
const secrets = require('../../helpers/config/keys.js');

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  // if (!username || !password) {
  //   res.status(400).json({ 
  //     message: 'Please provide a username and password.'
  //   });
  // }
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error)
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  // if(!username || !password) {
  //   res.status(400).json({ 
  //     message: 'Please provide a username and a password.'
  //   });
  // }
  Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ user, token });
      } else {
        res.status(401).json({ 
          message: 'Invalid credentials.'
        })
      }
    })
    .catch(error =>
      res.status(500).json(error));
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  }

  const options= {
    expiresIn: '1d',
  }

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;

