const mongoose = require('mongoose');

const mongooseUri = 'mongodb://localhost/tenthop-photos'

const db = mongoose.connect(mongooseUri);

module.exports.db = db;
