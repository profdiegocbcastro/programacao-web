import * as repository from './repository.js';

export async function listar() {
    return await repository.listar();
}

export async function criar(usuario) {
    return await repository.criar(usuario);
}

export async function visualizar(id) {
    return await repository.visualizar(id);
}

export async function editar(id, dados) {
    return await repository.editar(id, dados);
}

export async function deletar(id) {
    return await repository.deletar(id);
}

// INTERESSES

export async function listarInteressesUsuario(idUsuario) {
    return await repository.listarInteressesUsuario(idUsuario);
}

export async function criarInteresseUsuario(idUsuario, idInteresse) {
    return await repository.criarInteresseUsuario(idUsuario, idInteresse);
}

export async function visualizarInteresseUsuario(idUsuario, idInteresse) {
    return await repository.visualizarInteresseUsuario(idUsuario, idInteresse);
}

export async function deletarInteresseUsuario(idUsuario, idInteresse) {
    return await repository.deletarInteresseUsuario(idUsuario, idInteresse);
}