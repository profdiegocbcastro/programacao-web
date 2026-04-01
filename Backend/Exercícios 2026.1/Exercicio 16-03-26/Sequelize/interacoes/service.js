import * as repository from './repository.js';

export async function listar() {
    return await repository.listar();
}

export async function criar(interacao) {
    return await repository.criar(interacao);
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