import type { Request, Response } from 'express';
import { usuarioService } from './usuario.service';

export const usuarioController = {
  listar: async (req: Request, res: Response) => {
    const nome = typeof req.query.nome === 'string' ? req.query.nome : undefined;
    res.json(await usuarioService.listar(nome));
  },

  buscar: async (req: Request, res: Response) => {
    const usuario = await usuarioService.buscarPorId(Number(req.params.id));
    if (!usuario) {
      res.status(404).json({ erro: 'usuario nao encontrado' });
      return;
    }
    res.json(usuario);
  },

  criar: async (req: Request, res: Response) => {
    try {
      res.status(201).json(await usuarioService.criar(req.body));
    } catch (erro) {
      res.status(400).json({ erro: (erro as Error).message });
    }
  },

  atualizar: async (req: Request, res: Response) => {
    const usuario = await usuarioService.atualizar(
      Number(req.params.id),
      req.body,
    );
    if (!usuario) {
      res.status(404).json({ erro: 'usuario nao encontrado' });
      return;
    }
    res.json(usuario);
  },

  remover: async (req: Request, res: Response) => {
    const removido = await usuarioService.remover(Number(req.params.id));
    if (!removido) {
      res.status(404).json({ erro: 'usuario nao encontrado' });
      return;
    }
    res.status(204).end();
  },
};
