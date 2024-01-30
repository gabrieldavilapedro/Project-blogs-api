const router = require('express').Router();
const { user } = require('../controllers/userControler');

router.post('/', user);

module.exports = router;
