const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  if (!name) return { message: 400, data: { message: '"name" is required' } };
  return { message: 201, data: category };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return { message: 200, data: categories };
};

module.exports = {
  createCategory,
  getAll,
};