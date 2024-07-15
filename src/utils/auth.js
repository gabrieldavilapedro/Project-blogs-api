const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET || 'jwt_secret';


const tokenGenerator = (data) => {
  const token = jwt.sign({ data }, key, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const tokenValidator = (token) => jwt.verify(token, key);


module.exports = { tokenGenerator, tokenValidator };