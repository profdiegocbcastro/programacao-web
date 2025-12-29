const AlunoRepository = require('../repositories/AlunoRepository');

class AlunoService {
    listarTodos() {
        return AlunoRepository.findAll();
    }

    buscarPorId(id) {
        return AlunoRepository.findById(id);
    }

    criarAluno(dados) {
        // Validação: Impede o cadastro se o nome ou o e-mail estiverem ausentes
        if (!dados.nome || !dados.email) {
            throw new Error("Nome e Email são obrigatórios.");
        }
        return AlunoRepository.create(dados);
    }

    atualizarAluno(id, dados) {
        return AlunoRepository.update(id, dados);
    }
    
    removerAluno(id) {
        return AlunoRepository.delete(id);
    }
}

module.exports = new AlunoService();