const express = require('express');
const app = express();
const path = require('path');

const PhotoSiteController = require('../db/PhotoSiteController.js');

app.use(express.json());

const staticPath = __dirname + '/../client/dist/';
app.use(express.static(staticPath));

// ROUTES

// get all campsites
app.get('/api/campsites', (req, res) => {
  PhotoSiteController.getAll((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

// get one campsite by a specific siteID
app.get('/api/campsite/', (req, res) => {
  PhotoSiteController.getBySiteId(req.query.siteID, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

app.patch('/api/campsite', (req, res) => {
  PhotoSiteController.updatePicArray(req.query.siteID, req.body.newPicArray, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
})

module.exports = app;