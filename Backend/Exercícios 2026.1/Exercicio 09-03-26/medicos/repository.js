import { medicos } from '../db.js';

export function listar() {
    return medicos;
}

export function visualizar(id) {
    return medicos.find(m => m.id === id);
}

export function criar(medico) {
    medicos.push(medico);
    return medico;
}

export function atualizar(id, medico) {
    const index = medicos.findIndex(m => m.id === id);
    medicos[index] = medico;
    return medicos[index];
}

export function deletar(id) {
    const index = medicos.findIndex(m => m.id === id);
    return medicos.splice(index, 1);
}