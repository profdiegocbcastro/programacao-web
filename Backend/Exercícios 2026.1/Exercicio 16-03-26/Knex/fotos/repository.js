import db from '../database.js';

const fotos = () => db('fotos_usuarios');

export async function listar() {
    return await fotos().select('*').whereNull('deletado_em');
}

export async function criar(foto) {
    return await fotos().insert({...foto, criado_em: db.fn.now()}).returning('id');
}

export async function visualizar(id) {
    return await fotos().select('*').where('id', '=', id).whereNull('deletado_em');
}

export async function editar(id, dados) {
    return await fotos().where('id', '=', id).update({...dados, atualizado_em: db.fn.now()}).returning('*');
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await fotos().where('id', '=', id).del();
    } else {
        return await fotos().where('id', '=', id).update({deletado_em: db.fn.now()}).returning('*');
    }
}