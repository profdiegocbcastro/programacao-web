const db = require('../database/connection');

class MatriculaRepository {
    // Lista todas as matriculas
    async findAll() { 
        return await db('matriculas').select('*'); 
    }
    // Lista as matriculas de um aluno pelo ID
    async findByAlunoId(aluno_id) {
        return await db('matriculas').where({ aluno_id }).select('*');
    }
    // Verifica se o par aluno/curso já existe (evita duplicados)
    async findByPair(aluno_id, curso_id) {
        return await db('matriculas').where({ aluno_id, curso_id }).first();
    }
    // Cria uma matricula
    async create(aluno_id, curso_id) {
        const [nova] = await db('matriculas')
            .insert({ aluno_id, curso_id })
            .returning('*');
        return nova;
    }
    // Remove uma matrícula pelo ID
    async delete(id) {
        return await db('matriculas').where({ id }).del();
    }
}

module.exports = new MatriculaRepository();