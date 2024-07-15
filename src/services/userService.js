const { User } = require('../models');
const { tokenGenerator } = require('../utils/auth');

const emailmensagem = '"displayName" length must be at least 8 characters long';
const passwordmensagem = '"password" length must be at least 6 characters long';

const user = async (displayName, email, password, image) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailIsValid = emailRegex.test(email);
  if (emailIsValid === false) {
    return { message: 400, data: { message: '"email" must be a valid email' } };
  }
  const emailExists = await User.findOne({ where: { email } });
  if (displayName.length < 8) return { message: 400, data: { message: emailmensagem } };

  if (password.length < 6) {
    return { message: 400, data: { message: passwordmensagem } };
  }
  if (emailExists) {
    return { message: 409, data: { message: 'User already registered' } };
  }
  await User.create({ displayName, email, password, image });

  const randomToken = await tokenGenerator(email);

  return { message: 201, data: { token: randomToken } };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { message: 200, data: users };
};

const getById = async (id) => {
  const userId = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!userId) {
    return { message: 404, data: { message: 'User does not exist' } };
  }
  return { message: 200, data: userId };
};

const deleteUser = async (userId) => {
  await User.destroy({ where: { id: userId } });
  return { message: 204, data: {} }
};

module.exports = {
  user,
  getAll,
  getById,
  deleteUser,
};