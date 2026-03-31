class AlunoRepository {
    constructor() {
        this.alunos = [];
    }

    findAll() {
        return this.alunos;
    }

    findById(id) {
        return this.alunos.find(a => a.id == id);
    }

    create(aluno) {
        const novoAluno = {
            id: this.alunos.length + 1,
            ...aluno
        };
        this.alunos.push(novoAluno);
        return novoAluno;
    }

    update(id, dados) {
        const aluno = this.findById(id);
        if (!aluno) return null;

        Object.assign(aluno, dados);
        return aluno;
    }

    delete(id) {
        const index = this.alunos.findIndex(a => a.id == id);
        if (index === -1) return null;

        return this.alunos.splice(index, 1)[0];
    }
}

module.exports = new AlunoRepository();