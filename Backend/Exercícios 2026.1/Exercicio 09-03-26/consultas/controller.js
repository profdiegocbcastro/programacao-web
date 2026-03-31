import * as service from './service.js';

export async function listar(req, res) {
    const consultas = await service.listar();
    res.status(200).json(consultas);
}

export async function criar(req, res) {
    try {
        const consulta = req.body;
        const consultaCriada = await service.criar(consulta);
        res.status(201).json(consultaCriada);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function visualizar(req, res) {
    const id = parseInt(req.params.id);
    const consulta = await service.visualizar(id);
    res.status(200).json(consulta);
}

export async function atualizar(req, res) {
    const id = parseInt(req.params.id);
    const consultaAtualizada = await service.atualizar(id, consulta);
    res.status(200).json(consultaAtualizada);
}

export async function modificar(req, res) {
    const id = parseInt(req.params.id);
    const consulta = req.body;
    const consultaAtualizada = await service.modificar(id, consulta);
    res.status(200).json(consultaAtualizada);
}

export async function deletar(req, res) {
    const id = parseInt(req.params.id);
    const consultaDeletada = await service.deletar(id);
    res.status(200).json(consultaDeletada);
}