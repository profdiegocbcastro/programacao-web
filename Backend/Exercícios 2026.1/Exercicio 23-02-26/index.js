const express = require('express');
const app = express();

let alunos = [];
let cursos = [];

app.use(express.json());

// MIDDLEWARE DE AUTENTICAÇÃO
// Exige uma chave de API válida (env API_KEY) no cabeçalho x-api-key
// para acessar qualquer rota abaixo.
app.use((req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).send("Error: Não autorizado!");
    }
    return next();
});

/* =============
// CRUD ALUNOS
// =============
*/
// LISTAR ALUNOS
app.get('/alunos/', (req, res) => {
    console.log(alunos);
    if (alunos.length === 0) return res.status(204).send();
    return res.status(200).send(alunos);
})

// VISUALIZAR ALUNO
app.get('/alunos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let aluno = alunos.find((aluno) => aluno.id === id);
    if (aluno) {
        return res.status(200).send(aluno);
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

// CADASTRAR ALUNO
app.post('/alunos/', (req, res) => {
    const {id, nome, matricula, cursos} = req.body;
    if (id && nome && matricula && cursos) {
        alunos.push({
            "id": id,
            "nome": nome,
            "matricula": matricula,
            "cursos": cursos
        });
        return res.status(201).send("Adicionado aluno " + nome);
    }
    return res.status(400).send("Error: Dados Incompletos!");
})

// DELETAR ALUNO
app.delete('/alunos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let aluno = alunos.find((aluno) => aluno.id === id);
    if (aluno) {
        let alunos_novos = alunos.filter((aluno) => aluno.id !== id);
        alunos = alunos_novos;
        return res.status(204).send(); 
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

// EDITAR ALUNO
app.put('/alunos/:id', (req, res) => {
    const id_aluno = parseInt(req.params.id);
    const {id, nome, matricula, cursos} = req.body;
    let antigo_aluno = alunos.find((aluno) => aluno.id === id_aluno);
    if (antigo_aluno) {
        const index = alunos.indexOf(antigo_aluno);
        if (id && nome && matricula && cursos) {
            alunos[index] = {
                "id": id,
                "nome": nome,
                "matricula": matricula,
                "cursos": cursos
            }
            return res.status(200).send("Alterado dados de " + antigo_aluno.nome + " para " + nome);
        }
        return res.status(400).send("Error: Dados Incompletos!");
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

// EDITAR ALUNO PARCIALMENTE
app.patch('/alunos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let antigo_aluno = alunos.find((aluno) => aluno.id === id);
    if (antigo_aluno) {
        const {nome, matricula, cursos} = req.body;
        const index = alunos.indexOf(antigo_aluno);
        antigo_aluno.nome = nome || antigo_aluno.nome;
        antigo_aluno.matricula = matricula || antigo_aluno.matricula;
        antigo_aluno.cursos = cursos || antigo_aluno.cursos;
        alunos[index] = antigo_aluno;
        return res.status(200).send("Alterado dados de aluno id " + id);
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

/* =============
// CRUD CURSOS
// =============
*/
// LISTAR CURSOS
app.get('/cursos/', (req, res) => {
    console.log(cursos);
    if (cursos.length === 0) return res.status(204).send([]);
    return res.status(200).send(cursos);
})

// VISUALIZAR CURSO
app.get('/cursos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let curso = cursos.find((curso) => curso.id === id);
    if (curso) {
        return res.status(200).send(curso);
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

// CADASTRAR CURSO
app.post('/cursos/', (req, res) => {
    const {id, nome, horas} = req.body;
    if (id && nome && horas) {
        cursos.push({
            "id": id,
            "nome": nome,
            "horas": horas
        });
        return res.status(201).send("Adicionado curso " + nome);
    }
    return res.status(400).send("Error: Dados Incompletos!");
})

// DELETAR CURSO
app.delete('/cursos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let curso = cursos.find((curso) => curso.id === id);
    if (curso) {
        let cursos_novos = cursos.filter((curso) => curso.id !== id);
        cursos = cursos_novos;
        return res.status(204).send(); 
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

// EDITAR CURSO
app.put('/cursos/:id', (req, res) => {
    const id_curso = parseInt(req.params.id);
    const {id, nome, horas} = req.body;
    let antigo_curso = cursos.find((curso) => curso.id === id_curso);
    if (antigo_curso) {
        const index = cursos.indexOf(antigo_curso);
        if (id && nome && horas) {
            cursos[index] = {
                "id": id,
                "nome": nome,
                "horas": horas
            }
            return res.status(200).send("Alterado dados de " + antigo_curso.nome + " para " + nome);
        }
        return res.status(400).send("Error: Dados Incompletos!");
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

// EDITAR CURSO PARCIALMENTE
app.patch('/cursos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let antigo_curso = cursos.find((curso) => curso.id === id);
    if (antigo_curso) {
        const {nome, horas} = req.body;
        const index = cursos.indexOf(antigo_curso);
        antigo_curso.nome = nome || antigo_curso.nome;
        antigo_curso.horas = horas || antigo_curso.horas
        cursos[index] = antigo_curso;
        return res.status(200).send("Alterado dados de curso id " + id);
    }
    else {
        return res.status(404).send("Error: Id Inválido!");
    }
})

app.listen(3000);