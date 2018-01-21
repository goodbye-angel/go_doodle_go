// setup
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('pretty-error').start();
const app = express();

mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;

// database
const mongoURI = process.env.MONGODB_URI ||
'mongodb://localhost:27017/go_doodle_go'
mongoose.connect(mongoURI, { useMongoClient: true });

// enable static assets
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// enable req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// enable delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// enable sessions
app.use(session({
  secret: "somanycatssolittletime",
  resave: false,
  saveUninitialized: false
}));

// controllers

// root route

// listen
app.listen(PORT, () => {
  console.log('Ready for doodling on port', PORT);
});
