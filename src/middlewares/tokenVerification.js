const { tokenValidator } = require('../utils/auth');

const tokenVerification = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const [, token] = authorization.split(' ');
  try {
    const user = tokenValidator(token);
    req.locals = user.data.id
    next();
  }
  catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenVerification;
