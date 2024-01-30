const loginService = require('../services/loginService');

const login = async (req, res) => {
    const { email, password } = req.body;
    const {message, data} = await loginService.login(email, password);
    return res.status(message).json(data);
}

module.exports = {
    login,
};