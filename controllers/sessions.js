// setup
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// models
const User = require('../models/users.js');

// ROUTES

// new
router.get('/login', (req, res) => {
  // res.render('sessions/new.ejs');
});

// create
router.post('/login', async (req, res) => {
  const foundUser = await User.findOne({ username: req.body.username });
  if(bcrypt.compareSync(req.body.password, foundUser.password)) {
    req.session.currentuser = foundUser;
    console.log("User logged in is:", foundUser)
    res.redirect('/');
  } else {
    // res.render('sessions/wrong.ejs');
  }
});

// delete
router.delete('/', async (req, res) => {
  await req.session.destroy();
  res.redirect('/');
});

module.exports = router;
