const router = require('express').Router();
const { createCategory, getAll } = require('../controllers/categoriesControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.post('/', tokenVerification, createCategory);
router.get('/', tokenVerification, getAll);

module.exports = router;
