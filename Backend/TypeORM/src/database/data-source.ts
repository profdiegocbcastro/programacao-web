import "reflect-metadata";
import { DataSource } from "typeorm";
import { Aluno } from "../entities/Aluno";
import { Curso } from "../entities/Curso";
import { Matricula } from "../entities/Matricula";

// Configuração da conexão com o banco de dados
export const AppDataSource = new DataSource({
    type: "postgres",                   // Tipo do banco de dados
    host: "127.0.0.1",                  
    port: 5433,                        
    username: "admin",                  // Usuário do banco
    password: "admin",                  // Senha do banco
    database: "db_gestao_escolar_type_orm",
    synchronize: true,                  // Cria as tabelas automaticamente
    logging: false,                    
    entities: [Aluno, Curso, Matricula],
});