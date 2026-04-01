import * as service from './service.js';

export async function listar(req, res) {
    const interesses = await service.listar();
    return res.status(200).json(interesses);
}

export async function criar(req, res) {
    const interesse = await service.criar(req.body);
    return res.status(201).json(interesse);
}

export async function visualizar(req, res) {
    const interesse = await service.visualizar(req.params.id);
    return res.status(200).json(interesse);
}

export async function editar(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const interesse = await service.editar(id, dados);
    return res.status(200).json(interesse);
}

export async function deletar(req, res) {
    const interesse = await service.deletar(req.params.id);
    return res.status(200).json(interesse);
}