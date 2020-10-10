const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('PhotoCarousel server listening on ', PORT));