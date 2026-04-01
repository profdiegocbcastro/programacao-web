import { Endereco } from '../modelIndex.js';
import Op from 'sequelize';

export async function listar() {
    return await Endereco.findAll();
}

export async function criar(endereco) {
    const novoEndereco = await Endereco.create(endereco);
    return novoEndereco.id;
}

export async function visualizar(id) {
    return await Endereco.findOne({
        where: {id: id}
    });
}

export async function editar(id, dados) {
    await Endereco.update({dados}, {where: {id: id}});
    return await Endereco.findByPk(id);
}

export async function deletar(id) {
    return await Endereco.destroy({where: {id: id}});
}