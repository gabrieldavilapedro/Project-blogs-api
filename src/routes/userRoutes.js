const router = require('express').Router();
const { user, getAll } = require('../controllers/userControler');
const tokenVerification = require('../middlewares/tokenVerification');

router.post('/', user);
router.get('/', tokenVerification, getAll);

module.exports = router;
