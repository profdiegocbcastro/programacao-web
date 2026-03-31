const app = require('./app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Docs em http://localhost:${PORT}/api-docs`);
});