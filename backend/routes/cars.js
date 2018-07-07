const router = require('express').Router();
const Car = require('../models/Car');
const User = require('../models/User');
const auth = require('../middleware/auth');

// CREATE A CAR (auth required)
router.post('/', auth.verify, (req, res, next) => {
  // Get car form data sent from client submitted form
  const { make, model, year, description } = req.body.car;

  // create the new car
  const car = new Car({
    make,
    model,
    year,
    description,
    owner: req.auth.id
  })

  // Save the car to the db
  car.save()
    .then(car => {
      // Populate the owner field
      car.populate('owner', (err, populatedCar) => {
        // error populating owner field
        if (err) { return res.sendStatus(500) }

        // Successful population of owner field.
        // Send car info back to client.
        res.status(200).json({ car: populatedCar.detailsJSON() })
      })
    })
    .catch(err => next);
})



module.exports = router;
