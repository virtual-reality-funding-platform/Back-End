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

router.get('/:id', (req, res) => {
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

router.get('/:id/projects', restricted, (req, res) => {
  Users.findProjectsByUserId(req.params.id)
    .then(userProjects => {
      if (userProjects) {
        res.status(200).json(userProjects)
      } else {
        res.status(404).json({ error: 'Could not find projects.' });
      }
    })
    .catch(error => 
      res.status(500).send(error))
});

router.put('/:id', restricted, (req, res) => {
  let user = req.body;
  let id = req.params.id;
  Users.update(user, id)
    .then(updated => {
      if (updated) {
        res.status(200).json({ message: 'Updated user.' });
      } else {
        res.status(404).json({ message: 'Could not update user.' });
      }
    })
    .catch(error => 
      res.status(500).send(error))
});

router.delete('/:id', restricted, (req, res) => {
  Users.remove(req.params.id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: 'User successfully deleted.' });
      } else {
        res.status(404).json({ message: 'Could not delete user.' });
      }
    })
    .catch(error => 
      res.status(500).send(error))
});

module.exports = router;