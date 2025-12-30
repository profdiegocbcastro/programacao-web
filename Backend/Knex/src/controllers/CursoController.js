const CursoService = require('../services/CursoService');

class CursoController {
    // Lista todos os cursos
    async getAll(req, res) {
        const cursos = await CursoService.listarTodos();
        res.status(200).json(cursos);
    }
    // Busca um curso por ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const curso = await CursoService.buscarPorId(id);
            res.status(200).json(curso);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
    // Cria um curso
    async create(req, res) {
        try {
            const novo = await CursoService.criarCurso(req.body);
            res.status(201).json(novo);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
    // Atualiza um curso
    async update(req, res) {
        try {
            const { id } = req.params;
            const atualizado = await CursoService.atualizarCurso(id, req.body);
            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
    // Remove um curso
    async delete(req, res) {
        try {
            const { id } = req.params;
            await CursoService.removerCurso(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new CursoController();