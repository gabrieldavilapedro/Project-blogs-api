const { tokenValidator } = require('../utils/auth');

const tokenVerification = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const [, token] = authorization.split(' ');
  if (!token) {
    return res.status(401).json({ message: 'Expired or invalid token',
    });
  }
  const payload = tokenValidator(token);
  if (!payload) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = tokenVerification;
