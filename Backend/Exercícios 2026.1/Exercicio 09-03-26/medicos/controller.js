import * as service from './service.js';

export async function listar(req, res) {
    const medicos = await service.listar();
    res.status(200).json(medicos);
}

export async function criar(req, res) {
    const medico = req.body;
    const medicoCriado = await service.criar(medico);
    res.status(201).json(medicoCriado);
}

export async function visualizar(req, res) {
    const id = parseInt(req.params.id);
    const medico = await service.visualizar(id);
    res.status(200).json(medico);
}

export async function visualizarConsultas(req, res) {
    const id = parseInt(req.params.id);
    const consultas = await service.visualizarConsultas(id);
    res.status(200).json(consultas);
}

export async function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const medico = req.body;
    const medicoAtualizado = await service.atualizar(id, medico);
    res.status(200).json(medicoAtualizado);
}

export async function modificar(req, res) {
    const id = parseInt(req.params.id);
    const medico = req.body;
    const medicoAtualizado = await service.modificar(id, medico);
    res.status(200).json(medicoAtualizado);
}

export async function deletar(req, res) {
    const id = parseInt(req.params.id);
    const medicoDeletado = await service.deletar(id);
    res.status(200).json(medicoDeletado);
}