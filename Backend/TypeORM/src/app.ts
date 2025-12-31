import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDoc from "./swagger.json";
import { AppDataSource } from "./database/data-source";
import routes from "./routes/routes";

const app = express();
app.use(express.json());

/**
 * DOCUMENTAÇÃO SWAGGER
 * Acesse: http://localhost:3000/api-docs
 */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.use(routes);

AppDataSource.initialize()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
        app.listen(3000, () => {
            console.log("Servidor rodando em http://localhost:3000");
            console.log("Swagger disponível em http://localhost:3000/api-docs");
        });
    })
    .catch((err) => {
        console.error("Erro ao inicializar o banco de dados:", err);
    });