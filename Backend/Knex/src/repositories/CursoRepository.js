const db = require('../database/connection');

class CursoRepository {
    // Lista todos os cursos
    async findAll() { 
        return await db('cursos').select('*'); 
    }
    // Busca um curso por ID
    async findById(id) { 
        return await db('cursos').where({ id }).first(); 
    }
    // Cria um curso
    async create(dados) {
        const [novo] = await db('cursos')
            .insert({
                nome: dados.nome,
                cargaHoraria: dados.cargaHoraria
            })
            .returning('*');
        return novo;
    }
    // Atualiza um curso
    async update(id, dados) {
        const [atualizado] = await db('cursos')
            .where({ id })
            .update(dados)
            .returning('*');
        return atualizado;
    }
    // Remove um curso
    async delete(id) { 
        return await db('cursos').where({ id }).del(); 
    }
}

module.exports = new CursoRepository();