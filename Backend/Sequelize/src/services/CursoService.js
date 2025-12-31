const CursoRepository = require('../repositories/CursoRepository');

class CursoService {
    // Retorna a lista completa de cursos
    async listarTodos() {
        return await CursoRepository.findAll();
    }
    // Valida a existência do curso antes de retornar
    async buscarPorId(id) {
        const curso = await CursoRepository.findById(id);
        if (!curso) throw new Error("Curso não encontrado.");
        return curso;
    }
    // Valida os dados antes da criação no banco
    async criar(dados) {
        if (!dados.nome || !dados.cargaHoraria) {
            throw new Error("Dados inválidos: Nome obrigatório e carga horária deve ser positiva.");
        }
        return await CursoRepository.create(dados);
    }
    // Verifica se o curso existe antes de tentar atualizar
    async atualizar(id, dados) {
        const atualizado = await CursoRepository.update(id, dados);
        if (!atualizado) throw new Error("Curso não encontrado para atualização.");
        return atualizado;
    }
    // Gerencia a exclusão
    async remover(id) {
        const deletado = await CursoRepository.delete(id);
        if (!deletado) throw new Error("Curso não encontrado para remoção.");
        return deletado;
    }
}

module.exports = new CursoService();