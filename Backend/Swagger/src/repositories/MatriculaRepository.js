const db = require('../database/db');

class MatriculaRepository {
    // Cria o vínculo entre aluno e curso
    create(alunoId, cursoId) {
        const novaMatricula = {
            id: Date.now(),
            alunoId: parseInt(alunoId),
            cursoId: parseInt(cursoId),
            data: new Date().toISOString()
        };
        db.matriculas.push(novaMatricula);
        return novaMatricula;
    }
    // Retorna todas as matrículas
    findAll() {
        return db.matriculas;
    }
    // Busca matrículas de um aluno específico
    findByAlunoId(alunoId) {
        return db.matriculas.filter(m => m.alunoId === parseInt(alunoId));
    }
    // Remove uma matrícula do array
    delete(id) {
        const index = db.matriculas.findIndex(m => m.id === parseInt(id));
        if (index !== -1) {
            db.matriculas.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new MatriculaRepository();