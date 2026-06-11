const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController');
const CursoController = require('../controllers/CursoController');
const MatriculaController = require('../controllers/MatriculaController');
const AuthController = require('../controllers/AuthController');
const authMiddleware = require('../middlewares/authMiddleware');

// --- AUTH (rotas públicas) ---
router.post('/auth/registrar', (req, res) => AuthController.registrar(req, res));
router.post('/auth/login', (req, res) => AuthController.login(req, res));

// --- ALUNO (protegidas) ---
router.get('/alunos', authMiddleware, (req, res) => AlunoController.getAll(req, res));
router.get('/alunos/:id', authMiddleware, (req, res) => AlunoController.getById(req, res));
router.post('/alunos', authMiddleware, (req, res) => AlunoController.create(req, res));
router.put('/alunos/:id', authMiddleware, (req, res) => AlunoController.update(req, res));
router.delete('/alunos/:id', authMiddleware, (req, res) => AlunoController.delete(req, res));

// --- CURSO (protegidas) ---
router.get('/cursos', (req, res) => CursoController.getAll(req, res));
router.get('/cursos/:id', authMiddleware, (req, res) => CursoController.getById(req, res));
router.post('/cursos', authMiddleware, (req, res) => CursoController.create(req, res));
router.put('/cursos/:id', authMiddleware, (req, res) => CursoController.update(req, res));
router.delete('/cursos/:id', authMiddleware, (req, res) => CursoController.delete(req, res));

// --- MATRÍCULA (protegidas) ---
router.get('/matriculas', authMiddleware, (req, res) => MatriculaController.getAll(req, res));
router.post('/matriculas', authMiddleware, (req, res) => MatriculaController.create(req, res));
router.delete('/matriculas/:id', authMiddleware, (req, res) => MatriculaController.delete(req, res));

module.exports = router;
