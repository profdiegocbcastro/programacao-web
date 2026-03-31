const express = require('express');
const router = express.Router();

const AlunoController = require('../controllers/AlunoController');

router.get('/alunos', (req, res) => AlunoController.getAll(req, res));
router.get('/alunos/:id', (req, res) => AlunoController.getById(req, res));
router.post('/alunos', (req, res) => AlunoController.create(req, res));
router.put('/alunos/:id', (req, res) => AlunoController.update(req, res));
router.delete('/alunos/:id', (req, res) => AlunoController.delete(req, res));

module.exports = router;