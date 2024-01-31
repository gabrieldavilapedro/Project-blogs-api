const jwt = require('jsonwebtoken');

const tokenGenerator = (email) => {
  const key = process.env.JWT_SECRET;
  const token = jwt.sign({ email }, key);
  
  return token;
};

const tokenValidator = (token) => {
  const key = process.env.JWT_SECRET;
  const payload = jwt.verify(token, key);
  return payload;
};

module.exports = { tokenGenerator, tokenValidator };