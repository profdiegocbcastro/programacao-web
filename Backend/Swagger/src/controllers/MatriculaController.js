const MatriculaService = require('../services/MatriculaService');

class MatriculaController {
    // Cria matricula
    create(req, res) {
        try {
            const { alunoId, cursoId } = req.body;
            // Validação simples
            if (!alunoId || !cursoId) {
                return res.status(400).json({ erro: "alunoId e cursoId são obrigatórios." });
            }
            // Chama o serviço que contém a regra: 1 Aluno -> N Cursos
            const novaMatricula = MatriculaService.matricular(alunoId, cursoId);
            res.status(201).json(novaMatricula);
        } catch (error) {
            // Captura erros: "Aluno já matriculado neste curso" ou "Curso inexistente"
            res.status(400).json({ erro: error.message });
        }
    }
    // Retorna todas as matriculas
    getAll(req, res) {
        try {
            const matriculas = MatriculaService.listarTodas();
            res.status(200).json(matriculas);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao listar matrículas." });
        }
    }
    // Remove uma matricula
    delete(req, res) {
        try {
            const { id } = req.params;
            MatriculaService.cancelar(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    }
    
}

module.exports = new MatriculaController();