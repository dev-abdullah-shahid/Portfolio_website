const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: String,
  institute: String,
  year: Number,
});

module.exports = mongoose.model('Education', educationSchema);
