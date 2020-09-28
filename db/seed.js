const db = require('./db.js');
const PhotoSiteModel = require('./PhotoSiteModel.js');
const seedHelper = require('./seed-helpers.js');

const seedData = seedHelper.generateFullSeed()

const seedDB = function() {
  PhotoSiteModel.create(seedData)
    .then(() => db.disconnect());
};

seedDB();
