import { api } from './services/api';
import { DeleteModal } from '@/components/delete-modal';

export function DeleteUsuarioModal({
  usuario,

  atualizarLista,
}) {
  async function deletarUsuario() {
    await api.delete('/usuarios/${usuario.id}');

    atualizarLista();
  }

  return (
    <DeleteModal
      title={'Deletar usuário: ${usuario.nome}'}
      onDelete={deletarUsuario}
    />
  );
}