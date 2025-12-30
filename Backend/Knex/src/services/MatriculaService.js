const MatriculaRepository = require('../repositories/MatriculaRepository');
const AlunoRepository = require('../repositories/AlunoRepository');
const CursoRepository = require('../repositories/CursoRepository');

class MatriculaService {
    // Listagem global
    async listarTodas() { 
        return await MatriculaRepository.findAll(); 
    }
    // Listagem filtrada por aluno
    async listarPorAluno(id_aluno) {
        const aluno = await AlunoRepository.findById(id_aluno);
        if (!aluno) throw new Error("Aluno não encontrado.");
        return await MatriculaRepository.findByAlunoId(id_aluno);
    }
    // Cria uma matricula
    async matricular(alunoId, cursoId) {
        // Verifica se o aluno e o curso existem no banco de dados
        const aluno = await AlunoRepository.findById(alunoId);
        const curso = await CursoRepository.findById(cursoId);
        // Retorna erro caso algum dos dois não seja encontrado
        if (!aluno || !curso) {
            throw new Error("Aluno ou Curso inexistente.");
        }
        // Valida se o aluno já possui matrícula ativa neste curso específico
        const jaExiste = await MatriculaRepository.findByPair(alunoId, cursoId);
        if (jaExiste) {
            throw new Error("O aluno já está matriculado neste curso.");
        }
        // Faz a nova matrícula e retorna o registro criado
        return await MatriculaRepository.create(alunoId, cursoId);
    }
    // Gerencia a exclusão
    async cancelar(id) {
        return await MatriculaRepository.delete(id);
    }
}

module.exports = new MatriculaService();