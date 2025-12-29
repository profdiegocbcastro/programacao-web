const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController');
const CursoController = require('../controllers/CursoController');
const MatriculaController = require('../controllers/MatriculaController');

// --- ALUNO ---
router.get('/alunos', (req, res) => AlunoController.getAll(req, res));
router.get('/alunos/:id', (req, res) => AlunoController.getById(req, res));
router.post('/alunos', (req, res) => AlunoController.create(req, res));
router.put('/alunos/:id', (req, res) => AlunoController.update(req, res));
router.delete('/alunos/:id', (req, res) => AlunoController.delete(req, res));

// --- CURSO ---
router.get('/cursos', (req, res) => CursoController.getAll(req, res));
router.get('/cursos/:id', (req, res) => CursoController.getById(req, res));
router.post('/cursos', (req, res) => CursoController.create(req, res));
router.put('/cursos/:id', (req, res) => CursoController.update(req, res));
router.delete('/cursos/:id', (req, res) => CursoController.delete(req, res));

// --- MATRÍCULA ---
router.get('/matriculas', (req, res) => MatriculaController.getAll(req, res));
router.post('/matriculas', (req, res) => MatriculaController.create(req, res));
router.delete('/matriculas/:id', (req, res) => MatriculaController.delete(req, res));

module.exports = router;