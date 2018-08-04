// Middleware used to verify jwt.
// Sets req.auth = payload from jwt
const expressJWT = require('express-jwt');

// function to parse out the token from header
function getTokenFromHeaders(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization.split(' ')[1];

    return token;
  }

  return null;
}

const auth = {
  // Get the token from authorization header
  // and verify if token is valid.
  // If valid, set req.auth = payload from token
  verify: expressJWT({
    secret: process.env.JWT_SECRET_KEY,
    getToken: getTokenFromHeaders,
    requestProperty: 'auth'
  })
}


module.exports = auth;
