import * as service from './service.js';

export async function listar(req, res) {
    const matches = await service.listar();
    return res.status(200).json(matches);
}

export async function criar(req, res) {
    const match = await service.criar(req.body);
    return res.status(201).json(match);
}

export async function visualizar(req, res) {
    const match = await service.visualizar(req.params.id);
    return res.status(200).json(match);
}

export async function editar(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const match = await service.editar(id, dados);
    return res.status(200).json(match);
}

export async function deletar(req, res) {
    const match = await service.deletar(req.params.id);
    return res.status(200).json(match);
}