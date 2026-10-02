import { usuarioRepository } from './usuario.repository';
import { usuarios } from './usuario.schema';

export const usuarioService = {
  listar: (nome?: string) => usuarioRepository.listar(nome),

  buscarPorId: (id: number) => usuarioRepository.buscarPorId(id),

  criar: async (dados: typeof usuarios.$inferInsert) => {
    const existente = await usuarioRepository.buscarPorEmail(dados.email);
    if (existente) throw new Error('email ja cadastrado');
    return usuarioRepository.criar(dados);
  },

  atualizar: (id: number, dados: Partial<typeof usuarios.$inferInsert>) =>
    usuarioRepository.atualizar(id, dados),

  remover: (id: number) => usuarioRepository.remover(id),
};
