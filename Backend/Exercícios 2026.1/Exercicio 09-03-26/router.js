import Router from 'express';
import routerMedicos from './medicos/router.js';
import routerPacientes from './pacientes/router.js';
import routerConsultas from './consultas/router.js';

const router = Router();

router.use('/medicos', routerMedicos);
router.use('/pacientes', routerPacientes);
router.use('/consultas', routerConsultas);

export default router;