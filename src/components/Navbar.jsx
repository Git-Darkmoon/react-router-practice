import { NavLink } from "react-router-dom"
import navbarData from "../navData"

function Navbar() {
  return (
    <nav className="navbar">
      {navbarData.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            {item.name}
          </NavLink>
        )
      })}
    </nav>
  )
}
export default Navbar
