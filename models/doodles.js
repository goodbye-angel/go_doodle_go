// setup
const mongoose = require('mongoose');

// doodle schema
const doodleSchema = new mongoose.Schema({
  doodle: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Doodle', doodleSchema);
