import * as repository from './repository.js';
import * as repositoryConsultas from '../consultas/repository.js';

export async function listar() {
    return await repository.listar();
}

export async function criar(medico) {
    const novoMedico = {
        id: medico.id,
        nome: medico.nome,
        crm: medico.crm
    };
    return await repository.criar(novoMedico);
}

export async function visualizar(id) {
    return await repository.visualizar(id);
}

export async function visualizarConsultas(id) {
    const consultas = await repositoryConsultas.listar()
    return await consultas.filter(c => c.medico === id)
}

export async function atualizar(id, medico) {
    return await repository.atualizar(id, medico);
}

export async function modificar(id, medico) {
    const medicoExistente = await repository.visualizar(id);
    const novoMedico = {
        id: medico.id || medicoExistente.id,
        nome: medico.nome || medicoExistente.nome,
        crm: medico.crm || medicoExistente.crm
    }
    return await repository.atualizar(id, novoMedico);
}

export async function deletar(id) {
    return await repository.deletar(id);    
}