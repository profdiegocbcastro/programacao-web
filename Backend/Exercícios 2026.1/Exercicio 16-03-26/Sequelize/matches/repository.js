import { Match } from '../modelIndex.js';
import Op from 'sequelize';

export async function listar() {
    return await Match.findAll({
        where: {deletado_em: null}
    });
}

export async function criar(match) {
    const novoMatch = await Match.create({
        ...match,
        criado_em: new Date()
    });
    return novoMatch.id;
}

export async function visualizar(id) {
    return await Match.findOne({
        where: {
            id: id,
            deletado_em: null
        }
    });
}

export async function editar(id, dados) {
    await Match.update({
        ...dados,
        atualizado_em: new Date
    }, {
        where: {id: id}
    })
    return await Match.findByPk(id);
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await Match.destroy({
            where: {id: id}
        });
    } else {
        return await editar(id, {deletado_em: new Date});
    }
}