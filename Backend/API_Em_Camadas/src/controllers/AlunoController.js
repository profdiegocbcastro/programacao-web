const AlunoService = require('../services/AlunoService');

class AlunoController {
    // Lista todos os alunos
    getAll(req, res) {
        const alunos = AlunoService.listarTodos();
        res.status(200).json(alunos);
    }
    // Cria um novo aluno
    create(req, res) {
        try {
            const novoAluno = AlunoService.criarAluno(req.body);
            res.status(201).json(novoAluno);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Busca um aluno específico pelo ID
    getById(req, res) {
        const { id } = req.params;
        const aluno = AlunoService.buscarPorId(id);
        if (!aluno) {
            return res.status(404).json({ error: "Aluno não encontrado." });
        }
        res.status(200).json(aluno);
    }
    // Atualiza os dados de um aluno
    update(req, res) {
        try {
            const { id } = req.params;
            const alunoAtualizado = AlunoService.atualizarAluno(id, req.body);
            res.status(200).json(alunoAtualizado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Remove um aluno do sistema
    delete(req, res) {
        try {
            const { id } = req.params;
            AlunoService.removerAluno(id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AlunoController();