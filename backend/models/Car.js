const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const CarSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true })

CarSchema.methods.detailsJSON = function() {
  return {
    _id: this._id,
    make: this.make,
    model: this.model,
    year: this.year,
    description: this.description,
    updatedAt: this.updatedAt,
    owner: this.owner.publicJSON()
  }
}

// Car method to only update and save fields that have changed
CarSchema.methods.updateAndSave = function(make, model, year, description) {
  if (make !== undefined) {
    this.make = make;
  }

  if (model !== undefined) {
    this.model = model;
  }

  if (year !== undefined) {
    this.year = year;
  }

  if (description !== undefined) {
    this.description = description;
  }

  return this.save().then(car => {
    return car.populate('owner', (err, populatedCar) => {
      if (err) { return res.sendStatus(500) }

      return populatedCar;
    })
  });
}

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
