const mongoose = require('mongoose');
const db = require('./db.js');
mongoose.Promise = global.Promise;

const schema = mongoose.Schema({
  siteID: Number,
  userName: String,
  userPic: String,
  postedOn: String,
  location: String,
  caption: String,
  pictures: Array
});

const PhotoSite = mongoose.model('PhotoSite', schema);

module.exports = PhotoSite;