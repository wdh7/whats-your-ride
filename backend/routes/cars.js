const router = require('express').Router();
const Car = require('../models/Car');
const User = require('../models/User');
const auth = require('../middleware/auth');

// If route contains "id" params, then attach
// car to the req object
router.param('id', (req, res, next, id) => {
  // Find the car by id in the db
  Car.findById(id)
    .then(car => {
      car.populate('owner', (err, populatedCar) => {
        if (err) { return res.status(500) }

        // Attach car data to the req object
        req.car = populatedCar;
        next();
      })
    })
    .catch(err => next)
})

// GET ALL CARS FROM THE DATABASE
router.get('/', (req, res, next) => {
  // Find all cars and populate the owner field
  Car.find()
    .populate('owner')
    .exec((err, cars) => {
      if (err) { return res.sendStatus(500) }

      // remove unnecessary properties from each car's owner property
      const edittedCars = cars.map(car => car.detailsJSON());
      res.status(200).json({ cars: edittedCars })
    })
})

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

// GET A CAR
router.get('/:id', (req, res, next) => {
  res.status(200).json({ car: req.car.detailsJSON() })
})





module.exports = router;
