import { Interesse } from '../modelIndex.js';

export async function listar() {
    return await Interesse.findAll();
}

export async function criar(interesse) {
    const novoInteresse = await Interesse.create(interesse);
    return novoInteresse.id;
}

export async function visualizar(id) {
    return await Interesse.findOne({where: {id: id}});
}

export async function editar(id, dados) {
    await Interesse.update({dados}, {where: {id: id}});
    return await Interesse.findByPk(id);
}

export async function deletar(id) {
    return await Interesse.destroy({where: {id: id}});
}