const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
const routes = require('./routes/routes'); 
 
require('./database/connection'); 

const app = express();
app.use(express.json());

/**
 * CONFIGURAÇÃO DO SWAGGER
 * Acesse: http://localhost:3000/api-docs
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`\nServidor iniciado com sucesso!`);
    console.log(`Documentação: http://localhost:${PORT}/api-docs`);
    console.log(`Banco de Dados: PostgreSQL (Docker) conectado diretamente.\n`);
});