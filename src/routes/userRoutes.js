const router = require('express').Router();
const { user, getAll } = require('../controllers/userControler');

router.post('/', user);
router.get('/', getAll);

module.exports = router;
