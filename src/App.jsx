import {BrowserRouter, HashRouter, Outlet} from "react-router"
import './Styles.css'
import Homepage from './pages/homepage'
import Navbar  from "./pages/navbar"
import Education from "./pages/education"
import Skills from "./pages/skills"
import Project from "./pages/project"
import Contact from "./pages/contact"
import Reserve from "./pages/alrightreseved"

function App() {
 

  return (
    <>
      <HashRouter>
      <Navbar/>
      <Homepage/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Reserve/>
      </HashRouter>
    </>
  )
}

export default App
