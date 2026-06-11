const AuthService = require('../services/AuthService');

class AuthController {
    async registrar(req, res) {
        try {
            const usuario = await AuthService.registrar(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const resultado = await AuthService.login(req.body);
            res.status(200).json(resultado);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();
