import type { Request, Response } from 'express';
import { matriculaService } from './matricula.service';

export const matriculaController = {
  listar: async (req: Request, res: Response) => {
    const usuarioId =
      typeof req.query.usuarioId === 'string'
        ? Number(req.query.usuarioId)
        : undefined;
    res.json(await matriculaService.listar(usuarioId));
  },

  matricular: async (req: Request, res: Response) => {
    try {
      const matricula = matriculaService.matricular(
        Number(req.body.usuarioId),
        Number(req.body.cursoId),
      );
      res.status(201).json(matricula);
    } catch (erro) {
      res.status(400).json({ erro: (erro as Error).message });
    }
  },

  concluir: async (req: Request, res: Response) => {
    try {
      const matricula = await matriculaService.concluir(
        Number(req.params.id),
        Number(req.body.nota),
      );
      if (!matricula) {
        res.status(404).json({ erro: 'matricula nao encontrada' });
        return;
      }
      res.json(matricula);
    } catch (erro) {
      res.status(400).json({ erro: (erro as Error).message });
    }
  },

  remover: async (req: Request, res: Response) => {
    const removida = await matriculaService.remover(Number(req.params.id));
    if (!removida) {
      res.status(404).json({ erro: 'matricula nao encontrada' });
      return;
    }
    res.status(204).end();
  },
};
