const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

app.get('/api/campsites', (req, res) => {
  res.send('Here are some campsites!');
})

let server;
const start = () => (server = app.listen(PORT, () => { console.log('Photo Carousel server running on port ', PORT)}));
const close = server ? server.close : () => {};

start();

module.exports = {
  start,
  close
}