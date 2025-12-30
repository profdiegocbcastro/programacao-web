const express = require('express');
const router = express.Router();

const Aluno = require('../controllers/AlunoController');
const Curso = require('../controllers/CursoController');
const Mat = require('../controllers/MatriculaController');

// --- ALUNO ---
router.get('/alunos', (req, res) => Aluno.getAll(req, res));
router.get('/alunos/:id', (req, res) => Aluno.getById(req, res));
router.post('/alunos', (req, res) => Aluno.create(req, res));
router.put('/alunos/:id', (req, res) => Aluno.update(req, res));
router.delete('/alunos/:id', (req, res) => Aluno.delete(req, res));

// --- CURSO ---
router.get('/cursos', (req, res) => Curso.getAll(req, res));
router.get('/cursos/:id', (req, res) => Curso.getById(req, res));
router.post('/cursos', (req, res) => Curso.create(req, res));
router.put('/cursos/:id', (req, res) => Curso.update(req, res));
router.delete('/cursos/:id', (req, res) => Curso.delete(req, res));

// --- MATRÍCULA ---
router.get('/matriculas', (req, res) => Mat.getAll(req, res));
router.delete('/matriculas/:id', (req, res) => Mat.delete(req, res));
router.get('/listar-matriculas/:id_aluno', (req, res) => Mat.getByAluno(req, res));
router.post('/matricular', (req, res) => Mat.create(req, res));

module.exports = router;