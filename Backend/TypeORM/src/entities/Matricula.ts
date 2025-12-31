import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { Aluno } from "./Aluno";
import { Curso } from "./Curso";

@Entity("matriculas") // Tabela que registra o vínculo entre Aluno e Curso (Regra 1:N)
export class Matricula {
    @PrimaryGeneratedColumn() // ID único da matrícula
    id: number;
    // Relacionamento Muitos-para-Um: Muitas matrículas podem pertencer a um único Aluno
    @ManyToOne(() => Aluno, (aluno) => aluno.matriculas, { onDelete: "CASCADE" })
    aluno: Aluno;
    // Relacionamento Muitos-para-Um: Muitas matrículas podem estar ligadas a um único Curso
    @ManyToOne(() => Curso, (curso) => curso.matriculas, { onDelete: "CASCADE" })
    curso: Curso;
}