import { Router } from "express";
import { EscolaController } from "../controllers/EscolaController";

const routes = Router();
const ctrl = new EscolaController();

// --- ALUNO ---
routes.get("/api/alunos", ctrl.getAllAlunos);
routes.post("/api/alunos", ctrl.postAluno);
routes.get("/api/alunos/:id", ctrl.getAluno);
routes.put("/api/alunos/:id", ctrl.putAluno);
routes.delete("/api/alunos/:id", ctrl.deleteAluno);

// --- CURSO ---
routes.get("/api/cursos", ctrl.getAllCursos);
routes.post("/api/cursos", ctrl.postCurso);
routes.get("/api/cursos/:id", ctrl.getCurso);
routes.put("/api/cursos/:id", ctrl.putCurso);
routes.delete("/api/cursos/:id", ctrl.deleteCurso);

// --- MATRÍCULA ---
routes.get("/api/matriculas", ctrl.getAllMatriculas);
routes.post("/api/matriculas", ctrl.postMatricula);
routes.get("/api/listar-matriculas/:id_aluno", ctrl.getMatriculasPorAluno);
routes.delete("/api/matriculas/:id", ctrl.deleteMatricula);

export default routes;