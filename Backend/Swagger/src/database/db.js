// Objeto que simula a persistência de dados em memória.
// Como não usamos SQL ou NoSQL, usaremos arrays para guardar os objetos.
const db = {
    alunos: [],
    cursos: [],
    matriculas: [] 
};

module.exports = db;