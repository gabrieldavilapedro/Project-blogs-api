const router = require('express').Router();
const { user, getAll, getById } = require('../controllers/userControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.post('/', user);
router.get('/', tokenVerification, getAll);
router.get('/:id', tokenVerification, getById);

module.exports = router;
