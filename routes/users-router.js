const express = require('express');

const router = express.Router();

const Users = require('../data/models/users.js');

router.get('/', (req, res) => {
  Users.find()
  .then(users => {
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ error: 'Could not find users.' });
    }
  })
  .catch(error =>
    res.status(500).send(error));
});

module.exports = router;