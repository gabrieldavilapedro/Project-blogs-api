const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  if (!name) return { message: 400, data: { message: '"name" is required' } };
  return { message: 201, data: category };
};

module.exports = {
  createCategory,
};