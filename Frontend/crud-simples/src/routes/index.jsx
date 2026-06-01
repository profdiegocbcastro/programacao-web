import { ListaAlunos } from "../alunos/listar"
import { DefaultLayout } from "../layouts/default-layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/alunos" element={<ListaAlunos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
