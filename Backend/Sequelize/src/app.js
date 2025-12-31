const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
const routes = require('./routes/routes');

require('./database/connection');

const app = express();
app.use(express.json());

/**
 * DOCUMENTAÇÃO SWAGGER
 * Acesse: http://localhost:3000/api-docs
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`\nServidor SEQUELIZE rodando em http://localhost:${PORT}`);
    console.log(`Documentação disponível em http://localhost:${PORT}/api-docs`);
    console.log(`Banco: PostgreSQL no Docker conectado.\n`);
});