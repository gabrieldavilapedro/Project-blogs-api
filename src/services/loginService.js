const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!email || !password) {
    return {
      message: 400, data: { message: 'Some required fields are missing' } }; 
  }

  if (!user || user.password !== password) {
    return { message: 400, data: { message: 'Invalid fields' } };
  }
  const randomToken = jwt.sign({ email }, process.env.JWT_SECRET);
  return {
    message: 200, data: { token: randomToken },
  };
};

module.exports = {
  login,
};