import { Request, Response } from "express";
import { EscolaService } from "../services/EscolaService";

const service = new EscolaService();

export class EscolaController {
    // --- MÉTODOS DE ALUNO ---
    // Listar todos os alunos
    async getAllAlunos(req: Request, res: Response) { 
        res.json(await service.listarAlunos()); 
    }
    // Criar um novo aluno
    async postAluno(req: Request, res: Response) { 
        res.status(201).json(await service.criarAluno(req.body)); 
    }
    // Buscar aluno por ID
    async getAluno(req: Request, res: Response) { 
        res.json(await service.buscarAlunoPorId(Number(req.params.id))); 
    }
    // Atualizar aluno
    async putAluno(req: Request, res: Response) { 
        await service.atualizarAluno(Number(req.params.id), req.body);
        res.json({ message: "Aluno atualizado" });
    }
    // Deletar aluno
    async deleteAluno(req: Request, res: Response) { 
        await service.deletarAluno(Number(req.params.id));
        res.status(204).send();
    }

    // --- MÉTODOS DE CURSO ---
    // Listar todos os cursos
    async getAllCursos(req: Request, res: Response) { 
        res.json(await service.listarCursos()); 
    }
    // Criar um novo curso
    async postCurso(req: Request, res: Response) { 
        res.status(201).json(await service.criarCurso(req.body)); 
    }
    // Buscar curso por ID
    async getCurso(req: Request, res: Response) { 
        res.json(await service.buscarCursoPorId(Number(req.params.id))); 
    }
    // Atualizar curso
    async putCurso(req: Request, res: Response) {
        await service.atualizarCurso(Number(req.params.id), req.body);
        res.json({ message: "Curso atualizado" });
    }
    // Deletar curso
    async deleteCurso(req: Request, res: Response) {
        await service.deletarCurso(Number(req.params.id));
        res.status(204).send();
    }

    // --- MÉTODOS DE MATRÍCULA ---
    // Listar todas as matrículas
    async getAllMatriculas(req: Request, res: Response) { 
        res.json(await service.listMatriculas()); 
    }
    // Realizar uma matrícula
    async postMatricula(req: Request, res: Response) {
        const { alunoId, cursoId } = req.body;
        res.status(201).json(await service.createMatricula(alunoId, cursoId));
    }
    // Cancelar uma matrícula
    async deleteMatricula(req: Request, res: Response) {
        await service.deleteMatricula(Number(req.params.id));
        res.status(204).send();
    }
    // Listar matrículas de um aluno específico
    async getMatriculasPorAluno(req: Request, res: Response) {
        res.json(await service.listByAluno(Number(req.params.id_aluno)));
    }
}