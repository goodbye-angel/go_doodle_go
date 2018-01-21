// setup
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('pretty-error').start();
const app = express();

mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;


// listen
app.listen(PORT, () => {
  console.log('Ready for doodling on port', PORT);
});
