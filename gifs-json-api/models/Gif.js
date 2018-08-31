const mongoose = require('mongoose');


const gifSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: String,
  url: String
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Gif', gifSchema);
