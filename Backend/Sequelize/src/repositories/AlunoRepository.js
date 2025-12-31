const Aluno = require('../models/Aluno');

class AlunoRepository {
    // Lista todos os alunos
    async findAll() {
        return await Aluno.findAll();
    }
    // Busca um aluno pelo ID.
    async findById(id) {
        return await Aluno.findByPk(id);
    }
    // Cria um aluno
    async create(dados) {
        return await Aluno.create(dados);
    }
    // Atualiza um aluno
    async update(id, dados) {
        const aluno = await Aluno.findByPk(id);
        if (aluno) {
            return await aluno.update(dados);
        }
        return null;
    }
    // Remove um aluno
    async delete(id) {
        return await Aluno.destroy({ where: { id } });
    }
}

module.exports = new AlunoRepository();