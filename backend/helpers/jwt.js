const jwt = require('jsonwebtoken');

function generateToken(user) {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

  return token;
}


module.exports = generateToken;
