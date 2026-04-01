import * as service from './service.js';

export async function listar(req, res) {
    const enderecos = await service.listar();
    return res.status(200).json(enderecos);
}

export async function criar(req, res) {
    const endereco = await service.criar(req.body);
    return res.status(201).json(endereco);
}

export async function visualizar(req, res) {
    const endereco = await service.visualizar(req.params.id);
    return res.status(200).json(endereco);
}

export async function editar(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const endereco = await service.editar(id, dados);
    return res.status(200).json(endereco);
}

export async function deletar(req, res) {
    const endereco = await service.deletar(req.params.id);
    return res.status(200).json(endereco);
}