const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tenthop-photos');

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

const getAll = (cb) => {
  PhotoSite.find({}).lean().exec((err, doc) => {
    if (err) {
      cb(err);
    } else {
      cb(null, doc);
    }
  })
}

module.exports.getAll = getAll;
