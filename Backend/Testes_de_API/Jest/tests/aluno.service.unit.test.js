const AlunoService = require('../src/services/AlunoService');
const AlunoRepository = require('../src/repositories/AlunoRepository');

jest.mock('../src/repositories/AlunoRepository');

describe('Testes Unitários: AlunoService', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Deve criar um aluno com sucesso quando tem nome e email', () => {
        const dadosAluno = { nome: "Matheus", email: "Matheus@email.com" };
        AlunoRepository.create.mockReturnValue({
            id: 1,
            ...dadosAluno
        });

        const resultado = AlunoService.criarAluno(dadosAluno);

        expect(resultado).toHaveProperty('id');
        expect(resultado.email).toBe("Matheus@email.com");
        expect(AlunoRepository.create).toHaveBeenCalledTimes(1);
    });

    it('Deve falhar se o NOME estiver faltando', () => {
        const dadosInvalidos = { email: "semnome@email.com" };

        expect(() => {
            AlunoService.criarAluno(dadosInvalidos);
        }).toThrow("Nome e Email são obrigatórios.");

        expect(AlunoRepository.create).not.toHaveBeenCalled();
    });

    it('Deve falhar se o EMAIL estiver faltando', () => {
        const dadosInvalidos = { nome: "Sem Email" };

        expect(() => {
            AlunoService.criarAluno(dadosInvalidos);
        }).toThrow("Nome e Email são obrigatórios.");

        expect(AlunoRepository.create).not.toHaveBeenCalled();
    });

    it('Deve retornar um aluno pelo ID', () => {
        const alunoEsperado = { id: 1, nome: "Matheus", email: "Matheus@email.com" };
        AlunoRepository.findById.mockReturnValue(alunoEsperado);

        const resultado = AlunoService.buscarPorId(1);

        expect(resultado).toEqual(alunoEsperado);
        expect(AlunoRepository.findById).toHaveBeenCalledWith(1);
    });

    it('Deve chamar o repositório para atualizar aluno', () => {
        const id = 1;
        const dados = { nome: "Matheus" };

        AlunoService.atualizarAluno(id, dados);
        expect(AlunoRepository.update).toHaveBeenCalledWith(id, dados);
    });

    it('Deve chamar o repositório para remover aluno', () => {
        const id = 1;

        AlunoService.removerAluno(id);
        expect(AlunoRepository.delete).toHaveBeenCalledWith(id);
    });
});