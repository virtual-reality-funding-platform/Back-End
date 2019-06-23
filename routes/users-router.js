const express = require('express');

const router = express.Router();

const restricted = require('../helpers/auth/restricted.js');

const Users = require('../data/models/users.js');

router.get('/', restricted, (req, res) => {
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

router.get('/:id', restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({error: 'Could not find user.' });
      }
    })
    .catch(error =>
      res.status(500).send(error));
});



module.exports = router;