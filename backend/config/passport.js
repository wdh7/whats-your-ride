const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'user[username]',
  passwordField: 'user[password]'
}, (username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) { return done(err) }

    if (!user || !user.isPasswordValid(password)) {
      return done(null, false, { message: 'Invalid username / password'} )
    }

    return done(null, user);
  })
}))
