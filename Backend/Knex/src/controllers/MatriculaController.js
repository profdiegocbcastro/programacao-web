const MatriculaService = require('../services/MatriculaService');

class MatriculaController {
    // Lista todas as matriculas
    async getAll(req, res) {
        const dados = await MatriculaService.listarTodas();
        res.status(200).json(dados);
    }
    // Lista as matriculas de um aluno pelo ID
    async getByAluno(req, res) {
        try {
            const { id_aluno } = req.params;
            const resultado = await MatriculaService.listarPorAluno(id_aluno);
            res.status(200).json(resultado);
        } catch (e) {
            res.status(404).json({ erro: e.message });
        }
    }
    // Cria uma matricula
    async create(req, res) {
        try {
            const { alunoId, cursoId } = req.body;
            const nova = await MatriculaService.matricular(alunoId, cursoId);
            res.status(201).json(nova);
        } catch (e) {
            res.status(400).json({ erro: e.message });
        }
    }
    // Remove uma matricula pelo ID
    async delete(req, res) {
        const { id } = req.params;
        await MatriculaService.cancelar(id);
        res.status(204).send();
    }
}

module.exports = new MatriculaController();