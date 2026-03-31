import * as repository from './repository.js';

export async function listar() {
    return await repository.listar();
}

export async function criar(consulta) {
    const conflito = await checarConflito(consulta);
    if(conflito) { throw new Error("Error: Conflito de datas."); } 
    const novaConsulta = {
        id: consulta.id,
        medico: consulta.medico,
        paciente: consulta.paciente,
        data: new Date(consulta.data)
    };
    return await repository.criar(novaConsulta);
}

export async function visualizar(id) {
    return await repository.visualizar(id);
}

export async function atualizar(id, consulta) {
    return await repository.atualizar(id, consulta);
}

export async function modificar(id, consulta) {
    const consultaExistente = await repository.visualizar(id);
    const novaConsulta = {
        id: consulta.id || consultaExistente.id,
        medico: consulta.medico || consultaExistente.medico,
        paciente: consulta.paciente || consultaExistente.paciente,
        data: new Date(consulta.data || consultaExistente.data)
    }
    return await repository.atualizar(id, novaConsulta);
}

export async function deletar(id) {
    return await repository.deletar(id);    
}

async function checarConflito(consulta) {
    const consultas = await repository.listar();
    return consultas.some(c =>
        c.medico === consulta.medico &&
        c.data.getTime() === new Date(consulta.data).getTime()
    );
}