import db from '../database.js';

const mensagens = () => db('mensagens');

export async function listar() {
    return await mensagens().select('*');
}

export async function criar(mensagem) {
    return await mensagens().insert({...mensagem, enviado_em: db.fn.now()}).returning('id');
}

export async function visualizar(id) {
    return await mensagens().select('*').where('id', '=', id);
}