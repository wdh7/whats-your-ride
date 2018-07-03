const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/whats-your-ride');
mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDB');
  })
  .once('error', () => {
    console.log('Error connecting to MongoDB');
  })

app.use(cors());
app.use(bodyParser.json());







app.listen(3001, () => console.log('Listening on port 3001'));
