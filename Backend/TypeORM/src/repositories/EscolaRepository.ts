import { AppDataSource } from "../database/data-source";
import { Aluno } from "../entities/Aluno";
import { Curso } from "../entities/Curso";
import { Matricula } from "../entities/Matricula";

// Isolamos o acesso ao banco de dados para cada entidade
export const AlunoRepo = AppDataSource.getRepository(Aluno);
export const CursoRepo = AppDataSource.getRepository(Curso);
export const MatriculaRepo = AppDataSource.getRepository(Matricula);