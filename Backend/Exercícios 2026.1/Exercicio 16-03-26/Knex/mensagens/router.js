import Router from 'express';
import * as controller from './controller.js';

const router = Router();

router.get('/', controller.listar);
router.get('/:id', controller.visualizar);
router.post('/', controller.criar);

export default router;

