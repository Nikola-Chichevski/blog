const AuthService = require('./auth.service');
const { v4: uuidv4 } = require('uuid');

class AuthController {
    static async loginUser(req, res, next) {
        try {
            const user = await AuthService.loginUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async registerUser(req, res, next) {
        try {
            const user = await AuthService.registerUser(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = AuthController;