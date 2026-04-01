import { Foto } from '../modelIndex.js';
import Op from 'sequelize';

export async function listar() {
    return await Foto.findAll({
        where: {deletado_em: null}
    });
}

export async function criar(foto) {
    const novaFoto = await Foto.create({
        ...foto,
        criado_em: new Date()
    });
    return novaFoto.id;
}

export async function visualizar(id) {
    return await Foto.findOne({
        where: {
            id: id,
            deletado_em: null
        }
    });
}

export async function editar(id, dados) {
    await Foto.update({
        ...dados,
        atualizado_em: new Date
    }, {
        where: {id: id}
    })
    return await Foto.findByPk(id);
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await Foto.destroy({
            where: {id: id}
        });
    } else {
        return await editar(id, {deletado_em: new Date});
    }
}