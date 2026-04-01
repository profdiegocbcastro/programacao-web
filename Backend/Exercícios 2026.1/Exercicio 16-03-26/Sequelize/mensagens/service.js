import * as repository from './repository.js';

export async function listar() {
    return await repository.listar();
}

export async function criar(mensagem) {
    return await repository.criar(mensagem);
}

export async function visualizar(id) {
    return await repository.visualizar(id);
}