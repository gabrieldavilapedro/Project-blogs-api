const jwt = require('jsonwebtoken');
const { User } = require('../models');

const emailmensagem = '"displayName" length must be at least 8 characters long';
const passwordmensagem = '"password" length must be 6 characters long';

const user = async (displayName, email, password, image) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailIsValid = emailRegex.test(email);
  if (emailIsValid === false) {
    return { message: 400, data: { message: '"email" must be a valid email' } }; 
  }
  const emailExists = await User.findOne({ where: { email } });
  if (displayName.length < 8) return { message: 400, data: { message: emailmensagem } }; 
  
  if (password.length < 6) {
    return { message: 400, data: { message: passwordmensagem } }; 
  }
  if (emailExists) {
    return { message: 409, data: { message: 'User already registered' } }; 
  }
  await User.create({ displayName, email, password, image });
  const randomToken = jwt.sign({ email }, process.env.JWT_SECRET);
  return { message: 201, data: { token: randomToken } };
};

module.exports = {
  user,
};