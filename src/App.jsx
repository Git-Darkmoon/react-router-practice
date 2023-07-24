import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import SharedLayout from "./components/SharedLayout"

function App() {
  return (
    <Routes>
      <Route to="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route to="about" element={<About />} />
        <Route to="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
export default App
