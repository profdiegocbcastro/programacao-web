const db = require('../database/db');

class AlunoRepository {
    // Retorna a lista de alunos do banco
    findAll() {
        return db.alunos;
    }
    // Busca um aluno específico pelo ID
    findById(id) {
        return db.alunos.find(aluno => aluno.id === parseInt(id));
    }
    // Cria um aluno
    create(aluno) {
        const novoAluno = { id: Date.now(), ...aluno };
        db.alunos.push(novoAluno);
        return novoAluno;
    }
    // Atualiza os dados do aluno
    update(id, dadosAtualizados) {
        const index = db.alunos.findIndex(a => a.id === parseInt(id));
        if (index !== -1) {
            // Mescla os dados antigos com os novos
            db.alunos[index] = { ...db.alunos[index], ...dadosAtualizados };
            return db.alunos[index];
        }
        return null;
    }
    // Remove o aluno
    delete(id) {
        const index = db.alunos.findIndex(a => a.id === parseInt(id));
        if (index !== -1) {
            return db.alunos.splice(index, 1);
        }
        return null;
    }
}

module.exports = new AlunoRepository();