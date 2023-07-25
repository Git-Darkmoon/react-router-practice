import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Contact
      </NavLink>
    </nav>
  )
}
export default Navbar
