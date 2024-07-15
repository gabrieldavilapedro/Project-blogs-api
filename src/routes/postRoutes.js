const router = require('express').Router();
const { getAllPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.get('/', tokenVerification, getAllPosts);
router.post('/', tokenVerification, createPost);

router.get('/:id', tokenVerification, getPostById);
router.put('/:id', tokenVerification, updatePost);
router.delete('/:id', tokenVerification, deletePost);



module.exports = router;