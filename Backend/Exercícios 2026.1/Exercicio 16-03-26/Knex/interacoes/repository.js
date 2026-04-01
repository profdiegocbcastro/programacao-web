import db from '../database.js';

const interacoes = () => db('interacoes');

export async function listar() {
    return await interacoes().select('*').whereNull('deletado_em');
}

export async function criar(interacao) {
    return await interacoes().insert({...interacao, criado_em: db.fn.now()}).returning('id');
}

export async function visualizar(id) {
    return await interacoes().select('*').where('id', '=', id).whereNull('deletado_em');
}

export async function editar(id, dados) {
    return await interacoes().where('id', '=', id).update({...dados, atualizado_em: db.fn.now()}).returning('*');
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await interacoes().where('id', '=', id).del();
    } else {
        return await interacoes().where('id', '=', id).update({deletado_em: db.fn.now()}).returning('*');
    }
}