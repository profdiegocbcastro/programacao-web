import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Matricula } from "./Matricula";

@Entity("alunos") // Define que esta classe é uma tabela chamada 'alunos'
export class Aluno {
    @PrimaryGeneratedColumn() // Chave primária autoincremento
    id: number;
    
    @Column() // Coluna simples de texto
    nome: string;

    @Column()
    email: string;

    // Relacionamento Um-para-Muitos: Um aluno pode ter várias matrículas
    @OneToMany(() => Matricula, (matricula) => matricula.aluno)
    matriculas: Matricula[];
}