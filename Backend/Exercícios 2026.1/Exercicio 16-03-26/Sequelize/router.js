import Router from 'express';
import routerUsuarios from './usuarios/router.js';
import routerEnderecos from './enderecos/router.js';
import routerFotos from './fotos/router.js';
import routerInteresses from './interesses/router.js';
import routerMatches from './matches/router.js';
import routerInteracoes from './interacoes/router.js';
import routerMensagens from './mensagens/router.js';

const router = Router();

router.use('/usuarios', routerUsuarios);
router.use('/enderecos', routerEnderecos);
router.use('/fotos', routerFotos);
router.use('/interesses', routerInteresses);
router.use('/matches', routerMatches);
router.use('/interacoes', routerInteracoes);
router.use('/mensagens', routerMensagens);

export default router;