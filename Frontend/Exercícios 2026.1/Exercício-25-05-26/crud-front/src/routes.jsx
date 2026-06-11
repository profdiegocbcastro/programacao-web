import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import ListarUsuarios from './usuarios/listar'
import ListarFotos from './fotos/listar'
import ListarMatchs from './matchs/listar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <ListarUsuarios /> },
      { path: 'usuarios', element: <ListarUsuarios /> },
      { path: 'fotos', element: <ListarFotos /> },
      { path: 'matchs', element: <ListarMatchs /> },
    ],
  },
])

export default router
