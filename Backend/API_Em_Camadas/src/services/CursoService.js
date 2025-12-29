const CursoRepository = require('../repositories/CursoRepository');

class CursoService {
    listarTodos() { 
        return CursoRepository.findAll(); 
    }
    
    buscarPorId(id) {
        return CursoRepository.findById(id);
    }

    criarCurso(dados) {
        // Validação de presença de dados obrigatórios
        if (!dados.nome) throw new Error("Nome do curso é obrigatório");
        if (!dados.cargaHoraria) throw new Error("Carga horária é obrigatória");
        return CursoRepository.create(dados);
    }

    atualizarCurso(id, dados) {
        const cursoExistente = CursoRepository.findById(id);
        if (!cursoExistente) {
            throw new Error("Curso não encontrado para atualização.");
        }
        
        return CursoRepository.update(id, dados);
    }

    removerCurso(id) {
        const excluido = CursoRepository.delete(id);
        if (!excluido) {
            throw new Error("Curso inexistente.");
        }
        
        return excluido;
    }
}

module.exports = new CursoService();