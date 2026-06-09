import { api } from "./services/api"
import { EditModal } from "@/components/edit-modal"

export function EditUsuarioModal({
  usuario,

  atualizarLista,
}) {
  async function atualizarUsuario(form) {
    await api.put(`/usuarios/${usuario.id}`, {
      nome: form.nome,
      email: form.email,
    })

    atualizarLista()
  }

  return (
    <EditModal
        title="Editar Usuário"

        fields={{
          nome: usuario.nome,
          email: usuario.email,
        }}

        onSubmit={atualizarUsuario}
    />
  )
}