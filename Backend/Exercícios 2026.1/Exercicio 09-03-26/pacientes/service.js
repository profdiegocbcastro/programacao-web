import * as repository from './repository.js';
import * as repositoryConsultas from '../consultas/repository.js';

export async function listar() {
    return await repository.listar();
}

export async function criar(paciente) {
    const novoPaciente = {
        id: paciente.id,
        nome: paciente.nome,
        cpf: paciente.cpf
    };
    return await repository.criar(novoPaciente);
}

export async function visualizar(id) {
    return await repository.visualizar(id);
}

export async function visualizarConsultas(id) {
    const consultas = await repositoryConsultas.listar();
    return await consultas.filter(c => c.paciente === id)
}

export async function atualizar(id, paciente) {
    return await repository.atualizar(id, paciente);
}

export async function modificar(id, paciente) {
    const pacienteExistente = await repository.visualizar(id);
    const novoPaciente = {
        id: paciente.id || pacienteExistente.id,
        nome: paciente.nome || pacienteExistente.nome,
        cpf: paciente.cpf || pacienteExistente.cpf
    }
    return await repository.atualizar(id, novoPaciente);
}

export async function deletar(id) {
    return await repository.deletar(id);    
}