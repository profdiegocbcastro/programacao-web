const AlunoService = require('../services/AlunoService');

class AlunoController {
    // Lista todos os alunos
    async getAll(req, res) {
        const alunos = await AlunoService.listarTodos();
        res.status(200).json(alunos);
    }
    // Busca um aluno por ID
    async getById(req, res) {
        try {
            const { id } = req.params;
            const aluno = await AlunoService.buscarPorId(id);
            res.status(200).json(aluno);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
    // Cria um aluno
    async create(req, res) {
        try {
            const novo = await AlunoService.criarAluno(req.body);
            res.status(201).json(novo);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
    // Atualiza um aluno
    async update(req, res) {
        try {
            const { id } = req.params;
            const atualizado = await AlunoService.atualizarAluno(id, req.body);
            res.status(200).json(atualizado);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
    // Remove um aluno
    async delete(req, res) {
        try {
            const { id } = req.params;
            await AlunoService.removerAluno(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new AlunoController();