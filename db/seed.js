const db = require('./db.js');
const PhotoSiteModel = require('./PhotoSiteModel.js');
const seedHelper = require('./seed-helpers.js');

const seedData = seedHelper.generateFullSeed()

const seedDB = function() {
  PhotoSiteModel.create(seedData)
    .then(() => {
      console.log('database seeded successfully');
      db.disconnect();
    })
    .catch(err => console.log(err));
};

seedDB();
