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
CommentSchema.methods.editedJSON = function(commentAuthor) {
  const author = commentAuthor || this.author
  return {
    id: this._id,
    text: this.text,
    article: this.article,
    createdAt: this.createdAt,
    author: author.publicJSON()
  }
}

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
