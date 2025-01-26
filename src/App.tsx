import "./App.css"
import Toolbar from "./Toolbar.tsx"
import Landing from "./Landing.tsx"
import About from "./About.tsx"
import Education from "./Education.tsx"
import Skills from "./Skills.tsx"
import Experience from "./Experience.tsx"
import Footer from "./Footer.tsx"
import mouse from './assets/mouse-outline.svg'
import mouse_down from './assets/mouse-move-down.svg'

function App() {

  return (
    <>
      {/* <Toolbar/> */}
      <Landing/>
      {/* <div style={{display: 'flex', flexDirection: 'row', justifySelf: 'center'}} className="blob">
        <img src={mouse} ></img>
        <p className="little_text">Scroll down</p>
        <img src={mouse_down} ></img>
      </div> */}
      <About/>
      {/* <Education/> */}
      <Skills/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App
