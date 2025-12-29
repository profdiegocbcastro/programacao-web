const MatriculaRepository = require('../repositories/MatriculaRepository');
const AlunoRepository = require('../repositories/AlunoRepository');
const CursoRepository = require('../repositories/CursoRepository');

class MatriculaService {
    /**
     * Regra de Negócio:
     * 1. Aluno precisa existir.
     * 2. Curso precisa existir.
     * 3. Aluno pode estar em vários cursos.
     * 4. Aluno não pode ser matriculado 2x no mesmo curso.
     */
    matricular(alunoId, cursoId) {
        // Valida se o aluno existe
        const aluno = AlunoRepository.findById(alunoId);
        if (!aluno) {
            throw new Error("Aluno inexistente.");
        }
        // Valida se o curso existe
        const curso = CursoRepository.findById(cursoId);
        if (!curso) {
            throw new Error("Curso inexistente.");
        }
        // IMPLEMENTAÇÃO DA REGRA "1 Aluno -> N Cursos":
        const todasMatriculas = MatriculaRepository.findAll();
        // Verificamos se o alluno já foi matriculado no curso
        const jaEstaNesseCurso = todasMatriculas.some(m => 
            m.alunoId === parseInt(alunoId) && m.cursoId === parseInt(cursoId)
        );
        // Se o aluno já estiver no curso, travamos a operação.
        if (jaEstaNesseCurso) {
            throw new Error("O aluno já está matriculado neste curso.");
        }
        return MatriculaRepository.create(alunoId, cursoId);
    }
    listarTodas() {
        // Apenas retorna a lista de vínculos para conferência
        return MatriculaRepository.findAll();
    }
    cancelar(id) {
        const removido = MatriculaRepository.delete(id);
        if (!removido) {
            throw new Error("Matrícula não encontrada.");
        }
        return true;
    }
    
}
module.exports = new MatriculaService();