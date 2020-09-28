const PhotoSiteModel = require('./PhotoSiteModel.js');

const getAll = (cb) => {
  PhotoSiteModel.find({}).lean().exec((err, doc) => {
    if (err) {
      cb(err);
    } else {
      cb(null, doc);
    }
  });
}

const getBySiteId = (inputSiteId, cb) => {
  PhotoSiteModel.find({'siteID': inputSiteId}).lean().exec((err, doc) => {
    if (err) {
      cb(err);
    } else {
      cb(null, doc);
    }
  });
}

module.exports.getAll = getAll;
module.exports.getBySiteId = getBySiteId;