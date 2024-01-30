const userService = require('../services/userService');

const user = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { message, data } = await userService.user(displayName, email, password, image);
  return res.status(message).json(data);
};

const getAll = async (req, res) => {
  const { message, data } = await userService.getAll();
  return res.status(message).json(data);
};

module.exports = {
  user,
  getAll,
};