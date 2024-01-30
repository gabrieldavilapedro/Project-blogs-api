const router = require('express').Router();
const { login } = require('../controllers/loginControler');

router.post('/', login);

module.exports = router;