import * as service from './service.js';

export async function listar(req, res) {
    const mensagens = await service.listar();
    return res.status(200).json(mensagens);
}

export async function criar(req, res) {
    const mensagem = await service.criar(req.body);
    return res.status(201).json(mensagem);
}

export async function visualizar(req, res) {
    const mensagem = await service.visualizar(req.params.id);
    return res.status(200).json(mensagem);
}