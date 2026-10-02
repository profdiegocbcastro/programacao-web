import type { Request, Response } from 'express';
import { cursoService } from './curso.service';

export const cursoController = {
  listar: async (_req: Request, res: Response) => {
    res.json(await cursoService.listar());
  },

  relatorio: async (_req: Request, res: Response) => {
    res.json(await cursoService.relatorio());
  },

  buscar: async (req: Request, res: Response) => {
    const curso = await cursoService.buscarPorId(Number(req.params.id));
    if (!curso) {
      res.status(404).json({ erro: 'curso nao encontrado' });
      return;
    }
    res.json(curso);
  },

  criar: async (req: Request, res: Response) => {
    try {
      res.status(201).json(await cursoService.criar(req.body));
    } catch (erro) {
      res.status(400).json({ erro: (erro as Error).message });
    }
  },
};
