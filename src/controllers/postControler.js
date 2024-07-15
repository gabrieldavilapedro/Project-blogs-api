const { use } = require('chai');
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

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.locals;
  const { status, data } = await postService.createPost(title, content, categoryIds, userId);
  res.status(status).json(data);
}

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.locals;
  const { status, data } = await postService.updatePost(id, title, content, userId);
  res.status(status).json(data);

}

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.locals;
  const { status, data } = await postService.deletePost(id, userId);
  res.status(status).json(data);
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};  