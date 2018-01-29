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

// show
router.get('/:id', async (req, res) => {
  const oneDoodle = await Doodles.findById(req.params.id);
  res.render('doodles/show.ejs', { oneDoodle });
});

// edit
router.put('/:id/edit', async (req, res) => {
  const editDoodle = await Doodles.findByIdAndUpdate(req.params.id, req.body);
  res.render('doodles/edit.ejs', { editDoodle });
});

module.exports = router;
