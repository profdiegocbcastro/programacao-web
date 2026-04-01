import db from '../database.js';

const enderecos = () => db('enderecos');

export async function listar() {
    return await enderecos().select('*');
}

export async function criar(endereco) {
    return await enderecos().insert(endereco).returning('id');
}

export async function visualizar(id) {
    return await enderecos().select('*').where('id', '=', id);
}

export async function editar(id, dados) {
    return await enderecos().where('id', '=', id).update(dados).returning('*');
}

export async function deletar(id) {
    return await enderecos().where('id', '=', id).del();
}