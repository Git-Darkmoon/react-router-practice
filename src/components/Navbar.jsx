import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "link active" : "active")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "link active" : "active")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "link active" : "active")}
      >
        Contact
      </NavLink>
    </nav>
  )
}
export default Navbar
