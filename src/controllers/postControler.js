const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const { status, data } = await postService.getAllPosts();
  res.status(status).json(data);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getPostById(id);
  res.status(status).json(data);
}

module.exports = {
  getAllPosts,
  getPostById,
};