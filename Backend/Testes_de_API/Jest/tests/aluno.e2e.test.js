const request = require('supertest');
const app = require('../src/app');

describe('E2E - Alunos', () => {

    it('deve criar e listar um aluno', async () => {
        const novoAluno = {
            nome: "Diego",
            email: "diego@email.com"
        };

        await request(app)
            .post('/api/alunos')
            .send(novoAluno)
            .expect(201);

        const response = await request(app)
            .get('/api/alunos')
            .expect(200);

        expect(response.body.length).toBeGreaterThan(0);
    });

});