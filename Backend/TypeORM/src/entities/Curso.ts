import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Matricula } from "./Matricula";

@Entity("cursos") // Define que esta classe mapeia a tabela 'cursos' no Postgres
export class Curso {
    @PrimaryGeneratedColumn() // Define o ID como chave primária autoincremento
    id: number;

    @Column({ type: "varchar", length: 100 })
    nome_curso: string;

    @Column({ type: "int" })
    carga_horaria: number;

    // Relacionamento Um-para-Muitos: Um curso pode estar em várias matrículas
    @OneToMany(() => Matricula, (matricula) => matricula.curso)
    matriculas: Matricula[];
}