import { pacientes } from '../db.js';

export function listar() {
    return pacientes;
}

export function visualizar(id) {
    return pacientes.find(p => p.id === id);
}

export function criar(paciente) {
    pacientes.push(paciente);
    return paciente;
}

export function atualizar(id, paciente) {
    const index = pacientes.findIndex(p => p.id === id);
    pacientes[index] = paciente;
    return pacientes[index];
}

export function deletar(id) {
    const index = pacientes.findIndex(p => p.id === id);
    return pacientes.splice(index, 1);
}