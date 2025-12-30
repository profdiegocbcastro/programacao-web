const db = require('../database/connection');

class AlunoRepository {
    // Lista todos os alunos
    async findAll() { 
        return await db('alunos').select('*'); 
    }
    // Busca um aluno pelo ID.
    async findById(id) {
        return await db('alunos').where({ id }).first();
    }
    // Cria um aluno
    async create(dados) {
        const [novoAluno] = await db('alunos').insert(dados).returning('*');
        return novoAluno;
    }
    // Atualiza um aluno
    async update(id, dadosAtualizados) {
        const [alunoAtualizado] = await db('alunos')
            .where({ id })
            .update(dadosAtualizados)
            .returning('*');
        return alunoAtualizado;
    }
    // Remove um aluno
    async delete(id) { 
        return await db('alunos').where({ id }).del(); 
    }
}

module.exports = new AlunoRepository();