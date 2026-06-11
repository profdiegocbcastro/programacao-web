const jwt = require('jsonwebtoken');

const JWT_SECRET = 'minha_chave_secreta_jwt';

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.usuario = payload;
        next();
    } catch {
        return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }
}

module.exports = authMiddleware;
