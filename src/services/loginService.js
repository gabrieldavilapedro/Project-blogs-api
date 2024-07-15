const { User } = require('../models');
const { tokenGenerator } = require('../utils/auth');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!email || !password) {
    return {
      message: 400, data: { message: 'Some required fields are missing' }
    };
  }

  if (!user) {
    return { message: 400, data: { message: 'unregistered user' } };
  }

  if (user.password !== password) {
    return { message: 400, data: { message: 'Invalid fields' } };
  }

  delete user.password;
  const randomToken = await tokenGenerator(user);
  return {
    message: 200, data: { token: randomToken },
  };
};

module.exports = {
  login,
};