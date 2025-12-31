const MatriculaRepository = require('../repositories/MatriculaRepository');

class MatriculaService {
    // Cria uma matricula
    async matricular(alunoId, cursoId) {
        // Verifica se o aluno já está matriculado neste curso
        const existe = await MatriculaRepository.findPair(alunoId, cursoId);
        if (existe) {
            throw new Error("O aluno já está matriculado neste curso.");
        }
        // Se não existir, cria a matricula
        return await MatriculaRepository.create(alunoId, cursoId);
    }
    // Lista filtrada por aluno
    async listarPorAluno(id_aluno) {
        return await MatriculaRepository.findByAlunoId(id_aluno);
    }
    // Lista todas as matriculas
    async listarTodas() {
        return await MatriculaRepository.findAll();
    }
    // Gerencia a exclusão
    async cancelar(id) {
        const resultado = await MatriculaRepository.delete(id);
        if (!resultado) throw new Error("Matrícula não encontrada.");
        return resultado;
    }
}

module.exports = new MatriculaService();