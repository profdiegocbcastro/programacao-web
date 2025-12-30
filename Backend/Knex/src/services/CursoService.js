const CursoRepository = require('../repositories/CursoRepository');

class CursoService {
    // Retorna a lista completa de cursos
    async listarTodos() { 
        return await CursoRepository.findAll(); 
    }
    // Valida a existência do curso antes de retornar
    async buscarPorId(id) {
        const curso = await CursoRepository.findById(id);
        if (!curso) {
            throw new Error("Curso não encontrado.");
        }
        return curso;
    }
    // Valida os dados antes da criação no banco
    async criarCurso(dados) {
        if (!dados.nome || dados.cargaHoraria <= 0) {
            throw new Error("Dados inválidos: Nome obrigatório e carga horária deve ser positiva.");
        }
        return await CursoRepository.create(dados);
    }
    // Verifica se o curso existe antes de tentar atualizar
    async atualizarCurso(id, dados) {
        const cursoExiste = await CursoRepository.findById(id);
        if (!cursoExiste) throw new Error("Não é possível atualizar: Curso inexistente.");
        
        return await CursoRepository.update(id, dados);
    }
    // Gerencia a exclusão
    async removerCurso(id) {
        return await CursoRepository.delete(id);
    }
}

module.exports = new CursoService();