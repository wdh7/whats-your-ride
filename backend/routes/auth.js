const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// LOGIN
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {session: false}, (err, user, info) => {
    if (err) { return next(err) }

    if (!user) {
      return res.status(401).json(info);
    }

    return res.status(200).json({ user: user.authJSON() });

  })(req, res, next)
})


module.exports = router;
