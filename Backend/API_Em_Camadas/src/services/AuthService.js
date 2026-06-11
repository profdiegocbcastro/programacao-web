const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/UserRepository');

const JWT_SECRET = 'minha_chave_secreta_jwt';
const JWT_EXPIRES_IN = '8h';

class AuthService {
    async registrar(dados) {
        if (!dados.nome || !dados.email || !dados.senha) {
            throw new Error('Nome, email e senha são obrigatórios.');
        }

        const usuarioExistente = UserRepository.findByEmail(dados.email);
        if (usuarioExistente) {
            throw new Error('E-mail já cadastrado.');
        }

        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const novoUser = UserRepository.create({ nome: dados.nome, email: dados.email, senha: senhaHash });

        const { senha, ...userSemSenha } = novoUser;
        return userSemSenha;
    }

    async login(dados) {
        if (!dados.email || !dados.senha) {
            throw new Error('E-mail e senha são obrigatórios.');
        }

        const user = UserRepository.findByEmail(dados.email);
        if (!user) {
            throw new Error('Credenciais inválidas.');
        }

        const senhaValida = await bcrypt.compare(dados.senha, user.senha);
        if (!senhaValida) {
            throw new Error('Credenciais inválidas.');
        }

        const token = jwt.sign({ id: user.id, email: user.email, nome: user.nome }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        return { token, usuario: { id: user.id, email: user.email, nome: user.nome } };
    }
}

module.exports = new AuthService();
