import db from '../database.js';

const usuarios = () => db('usuarios');
const usuarios_interesses = () => db('usuarios_interesses');
const interesses = () => db('interesses');

export async function listar() {
    return await usuarios().select('*').whereNull('deletado_em');
}

export async function criar(usuario) {
    return await usuarios().insert({...usuario, criado_em: db.fn.now()}).returning('id');
}

export async function visualizar(id) {
    return await usuarios().select('*').where('id', '=', id).whereNull('deletado_em');
}

export async function editar(id, dados) {
    return await usuarios().where('id', '=', id).update({...dados, atualizado_em: db.fn.now()}).returning('*');
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await usuarios().where('id', '=', id).del();
    } else {
        return await usuarios().where('id', '=', id).update({deletado_em: db.fn.now()}).returning('*');
    }
}

// INTERESSES

export async function listarInteressesUsuario(idUsuario) {
    return await interesses().select('*').join('usuarios_interesses', 'interesses.id', 'usuarios_interesses.interesse_id')
    .where('usuarios_interesses.usuario_id', '=', idUsuario);
}

export async function criarInteresseUsuario(idUsuario, idInteresse) {
    return await usuarios_interesses().insert({ usuario_id: parseInt(idUsuario), interesse_id: parseInt(idInteresse) });
}

export async function visualizarInteresseUsuario(idUsuario, idInteresse) {
    return await interesses().select('*').join('usuarios_interesses', 'interesses.id', 'usuarios_interesses.interesse_id')
    .where('usuarios_interesses.usuario_id', '=', idUsuario).where('interesses.id', '=', idInteresse);
}

export async function deletarInteresseUsuario(idUsuario, idInteresse) {
    return await usuarios_interesses().where('usuario_id', '=', idUsuario).where('interesse_id', '=', idInteresse).del();
}