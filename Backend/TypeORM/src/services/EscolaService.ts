import { AlunoRepo, CursoRepo, MatriculaRepo } from "../repositories/EscolaRepository";

export class EscolaService {
    // --- MÉTODOS DE ALUNO ---
    async listarAlunos() { return await AlunoRepo.find(); }
    async criarAluno(dados: any) { return await AlunoRepo.save(AlunoRepo.create(dados)); }
    async buscarAlunoPorId(id: number) { return await AlunoRepo.findOneBy({ id: id }); }
    async atualizarAluno(id: number, dados: any) { return await AlunoRepo.update(id, dados); }
    async deletarAluno(id: number) { return await AlunoRepo.delete(id); }

    // --- MÉTODOS DE CURSO ---
    async listarCursos() { return await CursoRepo.find(); }
    async criarCurso(dados: any) { return await CursoRepo.save(CursoRepo.create(dados)); }
    async buscarCursoPorId(id: number) { return await CursoRepo.findOneBy({ id: id }); }
    async atualizarCurso(id: number, dados: any) { return await CursoRepo.update(id, dados); }
    async deletarCurso(id: number) { return await CursoRepo.delete(id); }

    // --- MÉTODOS DE MATRÍCULA ---
    async listMatriculas() { 
        return await MatriculaRepo.find({ relations: ["aluno", "curso"] }); 
    }
    async createMatricula(alunoId: number, cursoId: number) {
        const matricula = MatriculaRepo.create({ 
            aluno: { id: alunoId }, 
            curso: { id: cursoId } 
        });
        return await MatriculaRepo.save(matricula);
    }
    async deleteMatricula(id: number) { 
        return await MatriculaRepo.delete(id); 
    }
    async listByAluno(alunoId: number) {
        return await MatriculaRepo.find({ 
            where: { aluno: { id: alunoId } }, 
            relations: ["aluno", "curso"] 
        });
    }
}