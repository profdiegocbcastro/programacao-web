import { Interacao } from '../modelIndex.js';
import Op from 'sequelize';

export async function listar() {
    return await Interacao.findAll({
        where: {deletado_em: null}
    });
}

export async function criar(interacao) {
    const novaInteracao = await Interacao.create({
        ...interacao,
        criado_em: new Date()
    });
    return novaInteracao.id;
}

export async function visualizar(id) {
    return await Interacao.findOne({
        where: {
            id: id,
            deletado_em: null
        }
    });
}

export async function editar(id, dados) {
    await Interacao.update({
        ...dados,
        atualizado_em: new Date
    }, {
        where: {id: id}
    })
    return await Interacao.findByPk(id);
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await Interacao.destroy({
            where: {id: id}
        });
    } else {
        return await editar(id, {deletado_em: new Date});
    }
}