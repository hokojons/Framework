import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/calculator">Calculator</NavLink></li>
        <li><NavLink to="/todo">Todo List</NavLink></li>
        <li><NavLink to="/lyrics">Lyrics</NavLink></li>
      </ul>
    </nav>
  )
}