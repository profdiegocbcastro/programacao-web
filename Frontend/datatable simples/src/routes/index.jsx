import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { DefaultLayout } from "../layouts/default-layout"
import { ListaAlunos } from "../alunos/listar"

export function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<DefaultLayout />}>
          <Route
            path="/alunos"
            element={<ListaAlunos />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}