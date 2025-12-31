const Curso = require('../models/Curso');

class CursoRepository {
    // Lista todos os cursos
    async findAll() {
        return await Curso.findAll();
    }
    // Busca um curso por ID
    async findById(id) {
        return await Curso.findByPk(id);
    }
    // Cria um curso
    async create(dados) {
        return await Curso.create(dados);
    }
    // Atualiza um curso
    async update(id, dados) {
        const curso = await Curso.findByPk(id);
        if (curso) {
            return await curso.update(dados);
        }
        return null;
    }
    // Remove um curso
    async delete(id) {
        return await Curso.destroy({ where: { id } });
    }
}

module.exports = new CursoRepository();