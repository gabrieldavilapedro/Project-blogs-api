const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET || 'jwt_secret';

const tokenGenerator = (email) => {
  const token = jwt.sign({ email }, key);

  return token;
};

const tokenValidator = (token) => jwt.verify(token, key);


module.exports = { tokenGenerator, tokenValidator };