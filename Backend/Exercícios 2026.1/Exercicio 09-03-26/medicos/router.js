import Router from 'express';
import * as controller from './controller.js';

const router = Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
router.get('/:id', controller.visualizar);
router.get('/:id/consultas', controller.visualizarConsultas);
router.put('/:id', controller.atualizar);
router.patch('/:id', controller.modificar);
router.delete('/:id', controller.deletar);

export default router;