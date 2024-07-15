const { BlogPost, Category, User, PostCategory } = require('../models');

const checkCategoryNotExist = async (arrayIds) => {
  let notExist = false;
  const promises = arrayIds.map(async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
      notExist = true;
    }
  });
  await Promise.all(promises);
  return notExist;
};

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

const createPost = async (title, content, categoryIds, userId) => {
  const data = new Date();

  if (!title || !content || !categoryIds) {
    return { status: 400, data: { message: 'Some required fields are missing' } };
  }

  const categoryNotExist = await checkCategoryNotExist(categoryIds);
  if (categoryNotExist) return { status: 400, data: { message: 'one or more "categoryIds" not found' } };

  const newPost = await BlogPost.create({ title, content, userId, published: data, updated: data });

  const promises = await categoryIds.map(async (id) => {
    await PostCategory.create({ postId: newPost.id, categoryId: id });
  });

  await Promise.all(promises);

  return { status: 201, data: newPost };
}

const updatePost = async (id, title, content, userId) => {
  const post = await BlogPost.findByPk(id);
  data = new Date();

  if (post.userId !== userId) return { status: 401, data: { message: 'Unauthorized user' } };

  if (!title || !content) {
    return { status: 400, data: { message: 'Some required fields are missing' } };
  }

  await BlogPost.update({ title, content, updated: data }, { where: { id } });
  const updatedPost = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }],
    through: { attributes: [] },
  });

  return { status: 200, data: updatedPost };

}

const deletePost = async (id, userId) => {
  const post = await BlogPost.findByPk(id);

  if (!post) return { status: 404, data: { message: 'Post does not exist' } };

  if (post.userId !== userId) return { status: 401, data: { message: 'Unauthorized user' } };

  await BlogPost.destroy({ where: { id } });

  return { status: 204, data: {} };
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};