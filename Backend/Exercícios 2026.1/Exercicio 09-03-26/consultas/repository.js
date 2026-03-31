import { consultas } from '../db.js';

export function listar() {
    return consultas;
}

export function visualizar(id) {
    return consultas.find(c => c.id === id);
}

export function criar(consulta) {
    consultas.push(consulta);
    return consulta;
}

export function atualizar(id, consulta) {
    const index = consultas.findIndex(c => c.id === id);
    consultas[index] = consulta;
    return consultas[index];
}

export function deletar(id) {
    const index = consultas.findIndex(c => c.id === id);
    return consultas.splice(index, 1);
}