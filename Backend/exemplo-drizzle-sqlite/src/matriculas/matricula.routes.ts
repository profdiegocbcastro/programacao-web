import { Router } from 'express';
import { matriculaController } from './matricula.controller';

export const matriculaRoutes = Router();

matriculaRoutes.get('/', matriculaController.listar);
matriculaRoutes.post('/', matriculaController.matricular);
matriculaRoutes.patch('/:id/concluir', matriculaController.concluir);
matriculaRoutes.delete('/:id', matriculaController.remover);
