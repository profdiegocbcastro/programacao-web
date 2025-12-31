const AlunoRepository = require('../repositories/AlunoRepository');

class AlunoService {
    // Retorna a lista completa de alunos para o Controller
    async listar() {
        return await AlunoRepository.findAll();
    }
    // Busca um aluno e pode lançar um erro caso ele não exista
    async buscarPorId(id) {
        const aluno = await AlunoRepository.findById(id);
        if (!aluno) {
            throw new Error("Aluno não encontrado no sistema.");
        }
        return aluno;
    }
    // Valida se os campos obrigatórios estão presentes antes de criar
    async criar(dados) {
        if (!dados.nome || !dados.email) {
            throw new Error("Nome e e-mail são obrigatórios.");
        }
        return await AlunoRepository.create(dados);
    }
    // Gerencia a atualização dos dados
    async atualizar(id, dados) {
        const aluno = await AlunoRepository.update(id, dados);
        if (!aluno) throw new Error("Aluno não encontrado para atualização.");
        return aluno;
    }
    // Gerencia a exclusão
    async remover(id) {
        const deletado = await AlunoRepository.delete(id);
        if (!deletado) throw new Error("Aluno não encontrado para remoção.");
        return deletado;
    }
}

module.exports = new AlunoService();