import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <nav className="flex gap-4 p-4 border-b">
        <NavLink to="/usuarios">Usuários</NavLink>
        <NavLink to="/fotos">Fotos</NavLink>
        <NavLink to="/matchs">Matchs</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default App
