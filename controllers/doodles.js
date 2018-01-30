// setup
const express = require('express');
const router = express.Router();

// models
const Doodles = require('../models/doodles.js');

// ROUTES

// community doodles
router.get('/community', async (req, res) => {
  const communityDoodles = await Doodles.find();
  res.render('doodles/community.ejs', { communityDoodles, currentUser: req.session.currentuser });
});

// current user's doodles
router.get('/all', async (req, res) => {
  const allDoodles = await Doodles.find();
  res.render('doodles/all.ejs', { allDoodles, currentUser: req.session.currentuser });
});

// new/main page
router.get('/', async (req, res) => {
  res.render('doodles/new.ejs', { currentUser: req.session.currentuser });
});

// create
router.post('/', async (req, res) => {
  await Doodles.create(req.body);
  res.redirect('/');
});

// update
router.put('/:id', async (req, res) => {
  await Doodles.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/doodles/all');
});

// delete
router.delete('/:id', async (req, res) => {
  await Doodles.findByIdAndRemove(req.params.id);
  res.redirect('/doodles/all');
});

module.exports = router;
