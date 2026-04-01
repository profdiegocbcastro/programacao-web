import * as service from './service.js';

export async function listar(req, res) {
    const interacoes = await service.listar();
    return res.status(200).json(interacoes);
}

export async function criar(req, res) {
    const interacao = await service.criar(req.body);
    return res.status(201).json(interacao);
}

export async function visualizar(req, res) {
    const interacao = await service.visualizar(req.params.id);
    return res.status(200).json(interacao);
}

export async function editar(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const interacao = await service.editar(id, dados);
    return res.status(200).json(interacao);
}

export async function deletar(req, res) {
    const interacao = await service.deletar(req.params.id);
    return res.status(200).json(interacao);
}