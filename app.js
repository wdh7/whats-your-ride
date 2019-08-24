const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
require('./config/passport');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const carsRoutes = require('./routes/cars');

const app = express();
const port = process.env.PORT || 3001;
const connectionUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/whats-your-ride';

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

mongoose.connect(connectionUri, { useNewUrlParser: true });
mongoose.connection
  .once('open', () => {
    console.log('Connected to MongoDB');
  })
  .once('error', () => {
    console.log('Error connecting to MongoDB');
  });

app.use(cors());
app.use(bodyParser.json());
app.use(logger('tiny'));

// Routes
app.use('/api', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/cars', carsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

// Validation Error handling middleware
app.use((err, req, res, next) => {
  const errors = err.errors;
  const errorKeys = Object.keys(errors);
  const newErrors = { errors: {} };

  errorKeys.forEach((key) => {
    newErrors['errors'][key] = errors[key].message;
  });

  // log the errors to console
  // and send back error response to client
  console.log(newErrors);
  // code 422: can't process
  res.status(422).json(newErrors);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
