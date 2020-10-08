const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongooseUri = process.env.MONGOOSE_URI;

const db = mongoose.connect(mongooseUri);

module.exports.db = db;
