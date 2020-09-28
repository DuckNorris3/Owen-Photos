const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

const seedHelpers = require('../db/seed-helpers.js');

app.use(express.json());

app.get('/api/campsites', (req, res) => {
  const seedArray = seedHelpers.seedDB();
  res.json(seedArray);
})

let server;
const start = () => (server = app.listen(PORT, () => { console.log('Photo Carousel server running on port ', PORT)}));
const close = server ? server.close : () => {};

if (process.env.NODE_ENV !== 'test') {
  start();
}

module.exports = {
  start,
  close
}