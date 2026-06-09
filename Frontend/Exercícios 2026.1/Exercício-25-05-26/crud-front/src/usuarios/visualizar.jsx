import { useEffect, useState } from "react";
import { ViewModal } from "@/components/view-modal";
import { api } from "./services/api";

export function ViewUsuarioModal({ 
    usuario, 
}) {

  const [usarioDetalhes, setUsuarioDetalhes] =
   useState(null);

  async function carregarUsuarios() {
    
    const response = await api.get(
      `/usuarios/${usario.id}`
    )

    setUsuarioDetalhes(response.data)
  }

  useEffect(() => {
    carregarUsuarios()
  }, [])

  return (
    <ViewModal
      title="Visualizar Usuário"
      items={[
        {
          label: 'ID',
          value: usuario.id,
        },
        {
          label: 'Nome',
          value: usuario.nome,
        },
        {
          label: 'Email',
          value: usuario.email,
        }
      ]}
    />
  );
}
