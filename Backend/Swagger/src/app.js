const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
const routes = require('./routes/routes'); 
const app = express();

app.use(express.json());

/**
 * CONFIGURAÇÃO DO SWAGGER
 * Define o endpoint onde a documentação interativa será exibida.
 * Acesse: http://localhost:3000/api-docs
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:${PORT}`);
    console.log(`Documentação interativa disponível em http://localhost:${PORT}/api-docs`);
});