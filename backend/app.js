const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
require('./config/passport');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

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

app.use('/api', authRoutes);
app.use('/api/users', usersRoutes);

// Validation Error handling middleware
app.use((err, req, res, next) => {
  const errors = err.errors;
  const errorKeys = Object.keys(errors);
  const newErrors = { errors: {} };

  errorKeys.forEach(key => {
    newErrors['errors'][key] = errors[key].message;
  })

  // log the errors to console
  // and send back error response to client
  console.log(newErrors);
  // code 422: can't process
  res.status(422).json(newErrors);
})


app.listen(3001, () => console.log('Listening on port 3001'));
