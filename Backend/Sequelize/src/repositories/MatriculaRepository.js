const Matricula = require('../models/Matricula');

class MatriculaRepository {
    // Retorna todas as matrículas
    async findAll() {
        return await Matricula.findAll({ include: ['aluno', 'curso'] });
    }
    // Busca matriculas um aluno pelo ID
    async findByAlunoId(aluno_id) {
        return await Matricula.findAll({ 
            where: { aluno_id },
            include: ['aluno', 'curso']
        });
    }
    // Busca se já existe o par Aluno/Curso (Para validar duplicidade)
    async findPair(aluno_id, curso_id) {
        return await Matricula.findOne({ where: { aluno_id, curso_id } });
    }
    // Cria uma matricula
    async create(aluno_id, curso_id) {
        return await Matricula.create({ aluno_id, curso_id });
    }
    // Remove uma matricula
    async delete(id) {
        return await Matricula.destroy({ where: { id } });
    }
}

module.exports = new MatriculaRepository();