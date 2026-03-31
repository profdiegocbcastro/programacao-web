import * as service from './service.js';

export async function listar(req, res) {
    const pacientes = await service.listar();
    res.status(200).json(pacientes);
}

export async function criar(req, res) {
    const paciente = req.body;
    const pacienteCriado = await service.criar(paciente);
    res.status(201).json(pacienteCriado);
}

export async function visualizar(req, res) {
    const id = parseInt(req.params.id);
    const paciente = await service.visualizar(id);
    res.status(200).json(paciente);
}

export async function visualizarConsultas(req, res) {
    const id = parseInt(req.params.id);
    const consultas = await service.visualizarConsultas(id);
    res.status(200).json(consultas);
}

export async function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const paciente = req.body;
    const pacienteAtualizado = await service.atualizar(id, paciente);
    res.status(200).json(pacienteAtualizado);
}

export async function modificar(req, res) {
    const id = parseInt(req.params.id);
    const paciente = req.body;
    const pacienteAtualizado = await service.modificar(id, paciente);
    res.status(200).json(pacienteAtualizado);
}

export async function deletar(req, res) {
    const id = parseInt(req.params.id);
    const pacienteDeletado = await service.deletar(id);
    res.status(200).json(pacienteDeletado);
}