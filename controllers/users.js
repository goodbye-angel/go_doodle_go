// setup
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// models
const User = require('../models/users.js');

// ROUTES

// create user/encrypt password
router.post('/register', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  await User.create(req.body)
  console.log(req.body);
  res.redirect('/sessions/login');
});

// new
router.get('/register', (req, res) => {
  res.render('users/new.ejs');
});

module.exports = router;
