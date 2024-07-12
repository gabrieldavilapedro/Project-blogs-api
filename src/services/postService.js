const { BlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const getAllPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
    through: { attributes: [] },
  }); return { status: 200, data: getAllPosts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    }],
    through: { attributes: [] },
  });

  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: post };
}

module.exports = {
  getAllPosts,
  getPostById,
};