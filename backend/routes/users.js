const router = require('express').Router();
const User = require('../models/User');

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




// GET USER




// UPDATE USER





module.exports = router;
