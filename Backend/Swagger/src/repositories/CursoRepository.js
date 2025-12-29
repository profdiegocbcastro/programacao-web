const db = require('../database/db');

class CursoRepository {
    // Retorna todos os cursos
    findAll() {
        return db.cursos;
    }
    // Busca por ID
    findById(id) {
        return db.cursos.find(c => c.id === parseInt(id));
    }
    // Cria um curso
    create(dados) {
        const novoCurso = { 
            id: Date.now(), 
            nome: dados.nome, 
            cargaHoraria: dados.cargaHoraria 
        };
        db.cursos.push(novoCurso);
        return novoCurso;
    }
    // Atualiza os dados
    update(id, dados) {
        const index = db.cursos.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            db.cursos[index] = { ...db.cursos[index], ...dados };
            return db.cursos[index];
        }
        return null;
    }
    // Remove o curso
    delete(id) {
        const index = db.cursos.findIndex(c => c.id === parseInt(id));
        if (index !== -1) {
            return db.cursos.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new CursoRepository();