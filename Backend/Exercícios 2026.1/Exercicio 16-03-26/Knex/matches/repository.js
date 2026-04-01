import db from '../database.js';

const matches = () => db('matches');

export async function listar() {
    return await matches().select('*').whereNull('deletado_em');
}

export async function criar(match) {
    return await matches().insert({...match, criado_em: db.fn.now()}).returning('id');
}

export async function visualizar(id) {
    return await matches().select('*').where('id', '=', id).whereNull('deletado_em');
}

export async function editar(id, dados) {
    return await matches().where('id', '=', id).update({...dados, atualizado_em: db.fn.now()}).returning('*');
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await matches().where('id', '=', id).del();
    } else {
        return await matches().where('id', '=', id).update({deletado_em: db.fn.now()}).returning('*');
    }
}