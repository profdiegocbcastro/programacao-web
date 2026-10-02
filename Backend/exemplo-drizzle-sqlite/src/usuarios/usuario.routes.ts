import { Router } from 'express';
import { usuarioController } from './usuario.controller';

export const usuarioRoutes = Router();

usuarioRoutes.get('/', usuarioController.listar);
usuarioRoutes.post('/', usuarioController.criar);
usuarioRoutes.get('/:id', usuarioController.buscar);
usuarioRoutes.patch('/:id', usuarioController.atualizar);
usuarioRoutes.delete('/:id', usuarioController.remover);
