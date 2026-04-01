import { Mensagem } from '../modelIndex.js';
import Op from 'sequelize';

export async function listar() {
    return await Mensagem.findAll();
}

export async function criar(mensagem) {
    const novaMensagem = await Mensagem.create({
        ...mensagem,
        enviado_em: new Date()
    });
    return novaMensagem.id;
}

export async function visualizar(id) {
    return await Mensagem.findOne({
        where: {id: id}
    });
}