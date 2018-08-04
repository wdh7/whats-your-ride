const bcrypt = require('bcrypt');

// convert plain text password into hash
function createHash(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}


module.exports = createHash;
