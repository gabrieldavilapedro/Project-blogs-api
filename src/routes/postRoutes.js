const router = require('express').Router();
const { getAllPosts, getPostById } = require('../controllers/postControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.get('/', tokenVerification, getAllPosts);

router.get('/:id', tokenVerification, getPostById);

module.exports = router;