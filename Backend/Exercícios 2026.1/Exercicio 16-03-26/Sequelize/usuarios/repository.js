import { Usuario } from '../modelIndex.js';
import { Interesse } from '../modelIndex.js';
import Op from 'sequelize';

export async function listar() {
    return await Usuario.findAll({
        where: {deletado_em: null}
    });
}

export async function criar(usuario) {
    const novoUsuario = await Usuario.create({
        ...usuario,
        criado_em: new Date()
    });
    return novoUsuario.id;
}

export async function visualizar(id) {
    return await Usuario.findOne({
        where: {
            id: id,
            deletado_em: null
        }
    });
}

export async function editar(id, dados) {
    await Usuario.update({
        ...dados,
        atualizado_em: new Date
    }, {
        where: {id: id}
    })
    return await Usuario.findByPk(id);
}

export async function deletar(id, hardDelete = false) {
    if (hardDelete) {
        return await Usuario.destroy({
            where: {id: id}
        });
    } else {
        return await editar(id, {deletado_em: new Date});
    }
}

// INTERESSES

export async function listarInteressesUsuario(idUsuario) {
    const usuario = await Usuario.findByPk(idUsuario, {
        include: {
            model: Interesse
        }
    });
    return usuario.interesses;
}

export async function criarInteresseUsuario(idUsuario, idInteresse) {
    const usuario = Usuario.findByPk(idUsuario);
    await usuario.addInteresse(idInteresse);
}

export async function visualizarInteresseUsuario(idUsuario, idInteresse) {
    const usuario = await Usuario.findByPk(idUsuario, {
        include: {
            model: Interesse,
            where: {id: idInteresse}
        }
    });
    return usuario.interesses;
}

export async function deletarInteresseUsuario(idUsuario, idInteresse) {
    const usuario = await Usuario.findByPk(idUsuario);
    usuario.removeInteresse(idInteresse);
}