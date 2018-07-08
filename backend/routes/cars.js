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
      const editedCars = cars.map(car => car.detailsJSON());
      res.status(200).json({ cars: editedCars })
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

// EDIT A CAR (auth required)
router.put('/:id', auth.verify, (req, res, next) => {
  const { make, model, year, description } = req.body.car;

  User.findById(req.auth.id)
    .then(user => {
      // Cannot find user in db.
      if (!user) { return res.status(404).json({ message: 'User not found' })}

      // Check if auth user === car owner
      if (user.username === req.car.owner.username) {
        // continue with editting car
        req.car.updateAndSave(make, model, year, description)
          .then(updatedCar => res.status(200).json({ car: updatedCar.detailsJSON() }))
      } else {
        // Auth user is not the same as car owner
        res.status(401).json({ message: 'Unauthorized to make changes' })
      }
    })
})

// DELETE A CAR (need to be authed and match the car owner)
router.delete('/:id', auth.verify, (req, res, next) => {
  User.findById(req.auth.id)
    .then(user => {
      if (!user) { return res.status(404).json({ messasge: 'User not found' }) }

      // Check if auth user === car owner
      if (user.username === req.car.owner.username) {
        // continue with deleting car from the db
        Car.findByIdAndRemove({ _id: req.car._id }, (err, deletedCar) => {
          if (err) { return res.sendStatus(500) }

          res.status(200).json({ message: 'Successfully deleted car' })
        })
      } else {
        // Auth user is not the car owner. Cannot delete the car.
        res.status(401).json({ message: 'Unauthorized to make changes' })
      }
    })
})


module.exports = router;
