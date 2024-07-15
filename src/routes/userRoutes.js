const router = require('express').Router();
const { user, getAll, getById, deleteUser } = require('../controllers/userControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.post('/', user);
router.get('/', tokenVerification, getAll);
router.get('/:id', tokenVerification, getById);
router.delete('/:me', tokenVerification, deleteUser);

module.exports = router;
