const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const createHash = require('../helpers/credentials');
const generateToken = require('../helpers/jwt');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3
  },
  hash: {
    type: String,
    required: true
  },
  location: { type: String, required: true },
  tagline: String
}, { timestamps: true })

UserSchema.plugin(uniqueValidator);

UserSchema.methods.setHash = function(password) {
  this.hash = createHash(password);
}

UserSchema.methods.isPasswordValid = function(password) {
  return bcrypt.compareSync(password, this.hash);
}

UserSchema.methods.authJSON = function() {
  return {
    username: this.username,
    location: this.location,
    tagline: this.tagline,
    createdAt: this.createdAt,
    jwt: generateToken(this)
  }
}

// User model = constructor for creating and reading documents in MongoDB db
const User = mongoose.model('User', UserSchema);

module.exports = User;
