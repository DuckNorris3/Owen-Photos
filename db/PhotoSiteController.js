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

const updatePicArray = (inputSiteID, picArray, cb) => {
  const filter = { siteID: inputSiteID };
  const update = { pictures: picArray }

  PhotoSiteModel.findOneAndUpdate(filter, update, (err, doc) => {
    if (err) {
      cb(err);
    } else {
      cb(null, doc);
    }
  });
}

module.exports.getAll = getAll;
module.exports.getBySiteId = getBySiteId;
module.exports.updatePicArray = updatePicArray;

