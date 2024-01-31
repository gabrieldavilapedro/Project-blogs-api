const router = require('express').Router();
const { createCategory } = require('../controllers/categoriesControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.post('/', tokenVerification, createCategory);

module.exports = router;
