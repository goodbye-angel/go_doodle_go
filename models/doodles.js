// setup
const mongoose = require('mongoose');

// doodle schema
const doodleSchema = new mongoose.Schema({
  doodle: String,
  share: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Doodle', doodleSchema);
