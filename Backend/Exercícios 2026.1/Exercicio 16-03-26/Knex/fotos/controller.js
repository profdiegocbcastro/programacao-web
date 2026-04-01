import * as service from './service.js';

export async function listar(req, res) {
    const fotos = await service.listar();
    return res.status(200).json(fotos);
}

export async function criar(req, res) {
    const foto = await service.criar(req.body);
    return res.status(201).json(foto);
}

export async function visualizar(req, res) {
    const foto = await service.visualizar(req.params.id);
    return res.status(200).json(foto);
}

export async function editar(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const foto = await service.editar(id, dados);
    return res.status(200).json(foto);
}

export async function deletar(req, res) {
    const foto = await service.deletar(req.params.id);
    return res.status(200).json(foto);
}