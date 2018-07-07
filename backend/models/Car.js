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
    make: this.make,
    model: this.model,
    year: this.year,
    description: this.description,
    updatedAt: this.updatedAt,
    owner: this.owner.publicJSON()
  }
}

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
