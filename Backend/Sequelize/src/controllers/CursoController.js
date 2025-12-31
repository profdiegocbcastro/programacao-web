const CursoService = require('../services/CursoService');

class CursoController {
    // Lista todos os cursos
    async getAll(req, res) {
        try {
            const cursos = await CursoService.listarTodos();
            res.status(200).json(cursos);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    }
    // Busca um curso por ID
    async getById(req, res) {
        try {
            const curso = await CursoService.buscarPorId(req.params.id);
            res.status(200).json(curso);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
    // Cria um cursos
    async create(req, res) {
        try {
            const novo = await CursoService.criar(req.body);
            res.status(201).json(novo);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
    // Atualiza um curso
    async update(req, res) {
        try {
            const atualizado = await CursoService.atualizar(req.params.id, req.body);
            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
    // Remove um curso
    async delete(req, res) {
        try {
            await CursoService.remover(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
}

module.exports = new CursoController();