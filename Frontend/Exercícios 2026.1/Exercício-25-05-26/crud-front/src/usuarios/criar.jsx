export function CreateUsuarioModal({ atualizarLista }) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")

  async function criarUsuario(e, setOpen) {
    e.preventDefault()

    await api.post("/usuarios", {
      nome,
      email,
    });
    setNome("")
    setEmail("")
    atualizarLista()
    setOpen(false)
  }
  
  return (
    <FormModal title="Novo Usuário" triggerText="Adicionar Usuário">
      {({ setOpen }) => (
        <form onSubmit={(e) => criarUsuario(e, setOpen)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Nome</Label>
            <Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite o nome"
            />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite o email"
            />
          </div>
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </form>
      )}
    </FormModal>
  );
}