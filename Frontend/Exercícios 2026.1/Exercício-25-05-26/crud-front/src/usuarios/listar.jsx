import { useEffect } from "react";
import { CreateUsuarioModal } from "./criar";

useEffect(() => {
    carregarUsuarios();
}, []);

return (
    <div className="container mx-auto py-10">
        <div className="bg-white p-6 rounded-2xl shadow-xl">
            <DataTable columns={columns} data={usuarios}>
                <CreateUsuarioModal atualizarLista={carregarUsuarios} />
            </DataTable>
        </div>
    </div>
);