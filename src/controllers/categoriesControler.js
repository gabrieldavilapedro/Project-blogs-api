const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { message, data } = await categoriesService.createCategory(name);
  return res.status(message).json(data);
};

module.exports = {
  createCategory,
};