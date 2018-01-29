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
  try {
    await User.create(req.body);
  } catch (err) {
    console.log(err);
    res.render('users/username-taken.ejs');
  } finally {
    console.log(req.body);
    res.redirect('/sessions/login');
  }
});

// new
router.get('/register', (req, res) => {
  res.render('users/new.ejs');
});

module.exports = router;
