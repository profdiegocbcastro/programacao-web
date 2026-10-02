import { Router } from 'express';
import { cursoController } from './curso.controller';

export const cursoRoutes = Router();

cursoRoutes.get('/', cursoController.listar);
cursoRoutes.get('/relatorio', cursoController.relatorio);
cursoRoutes.get('/:id', cursoController.buscar);
cursoRoutes.post('/', cursoController.criar);
