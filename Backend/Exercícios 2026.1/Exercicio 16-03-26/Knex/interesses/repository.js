import db from '../database.js';

const interesses = () => db('interesses');

export async function listar(idUsuario = null) {
    return await interesses().select('*');
}

export async function criar(interesse) {
    return await interesses().insert(interesse).returning('id');
}

export async function visualizar(id) {
    return await interesses().select('*').where('id', '=', id);
}

export async function editar(id, dados) {
    return await interesses().where('id', '=', id).update(dados).returning('*');
}

export async function deletar(id) {
    return await interesses().where('id', '=', id).del();
}