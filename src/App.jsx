import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import SharedLayout from "./components/SharedLayout"
import Team from "./Pages/Team"
import User from "./Pages/User"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="team/:userId" element={<User />} />
      </Route>
    </Routes>
  )
}
export default App
