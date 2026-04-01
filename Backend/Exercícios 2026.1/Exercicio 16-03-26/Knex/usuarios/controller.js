import * as service from './service.js';

export async function listar(req, res) {
    const usuarios = await service.listar();
    return res.status(200).json(usuarios);
}

export async function criar(req, res) {
    const usuario = await service.criar(req.body);
    return res.status(201).json(usuario);
}

export async function visualizar(req, res) {
    const usuario = await service.visualizar(req.params.id);
    return res.status(200).json(usuario);
}

export async function editar(req, res) {
    const id = req.params.id;
    const dados = req.body;
    const usuario = await service.editar(id, dados);
    return res.status(200).json(usuario);
}

export async function deletar(req, res) {
    const usuario = await service.deletar(req.params.id);
    return res.status(200).json(usuario);
}

// INTERESSES

export async function listarInteressesUsuario(req, res) {
    const interesses = await service.listarInteressesUsuario(req.params.idUsuario);
    return res.status(200).json(interesses);
}

export async function criarInteresseUsuario(req, res) {
    const interesse = await service.criarInteresseUsuario(req.params.idUsuario, req.params.idInteresse);
    return res.status(201).send("Interesse inserido com sucesso!");
}

export async function visualizarInteresseUsuario(req, res) {
    const interesse = await service.visualizarInteresseUsuario(req.params.idUsuario, req.params.idInteresse);
    return res.status(200).json(interesse);
}

export async function deletarInteresseUsuario(req, res) {
    const interesse = await service.deletarInteresseUsuario(req.params.idUsuario, req.params.idInteresse);
    return res.status(200).json(interesse);
}