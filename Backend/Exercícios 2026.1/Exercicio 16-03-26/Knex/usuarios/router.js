import Router from 'express';
import * as controller from './controller.js';

const router = Router();

router.get('/', controller.listar);
router.get('/:id', controller.visualizar);
router.post('/', controller.criar);
router.put('/:id', controller.editar);
router.patch('/:id', controller.editar);
router.delete('/:id', controller.deletar);

// INTERESSES

router.get('/:idUsuario/interesses', controller.listarInteressesUsuario);
router.post('/:idUsuario/interesses/:idInteresse', controller.criarInteresseUsuario);
router.get('/:idUsuario/interesses/:idInteresse', controller.visualizarInteresseUsuario);
router.delete('/:idUsuario/interesses/:idInteresse', controller.deletarInteresseUsuario);

export default router;

