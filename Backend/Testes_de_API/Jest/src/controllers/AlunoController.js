const AlunoService = require('../services/AlunoService');

class AlunoController {
    getAll(req, res) {
        const alunos = AlunoService.listarTodos();
        res.status(200).json(alunos);
    }

    create(req, res) {
        try {
            const novoAluno = AlunoService.criarAluno(req.body);
            res.status(201).json(novoAluno);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getById(req, res) {
        const { id } = req.params;
        const aluno = AlunoService.buscarPorId(id);
        if (!aluno) {
            return res.status(404).json({ error: "Aluno não encontrado." });
        }
        res.status(200).json(aluno);
    }

    update(req, res) {
        try {
            const { id } = req.params;
            const alunoAtualizado = AlunoService.atualizarAluno(id, req.body);
            res.status(200).json(alunoAtualizado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

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