const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Car = require('./Car');

const CommentSchema = new Schema({
  text: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  car: { type: Schema.Types.ObjectId, ref: 'Car' }
}, { timestamps: true })

// method to remove properties from author object
CommentSchema.methods.editedJSON = function() {
  return {
    text: this.text,
    article: this.article,
    author: this.author.publicJSON()
  }
}

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
