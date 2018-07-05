const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// When user param is present in the path, attach user object
// to request if user is found in db. Then move to next middleware.
router.param('username', (req, res, next, username) => {
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      // set the user on the req object
      req.user = user;
      next();
    })
    .catch(err => next)
})

// REGISTER A NEW USER
router.post('/', (req, res, next) => {
  const { username, password, location, tagline } = req.body.user;

  const user = new User({
    username,
    location,
    tagline
  });

  // convert plain text password to hash
  user.setHash(password);

  user.save((err) => {
    if (err) {
      return next(err);
    }

    res.status(200).json({ message: 'Sucessfully created user' });
  });
})

// GET PUBLIC USER PROFILE
router.get('/:username', (req, res, next) => {
  res.status(200).json({ user: req.user.publicJSON() })
})

// UPDATE USER PROFILE
router.put('/:username', auth.verify, (req, res, next) => {
  const { username, password, location, tagline } = req.body.user;

  // only update user profile field if the client inputted updated info
  if (username !== undefined) {
    req.user.username = username;
  }

  if (password !== undefined) {
    req.user.setHash(password);
  }

  if (location !== undefined) {
    req.user.location = location;
  }

  if (tagline !== undefined) {
    req.user.tagline = tagline;
  }

  req.user.save()
    .then(user => res.status(200).json({ user: user.authJSON() }))
    .catch(err => next)
})




module.exports = router;
