//components 
import Cursor from "./components/Cursor"
import LandingSec from "./sections/LandingSec"
import Projects from "./sections/Projects"



function App() {


  

  return (
    <div className="container mx-auto max-w-[2000px]">

      <Cursor />
      <LandingSec   /> 
      <Projects />
      <div className="h-screen bg-[#a28a57]"></div>

    </div>
  )
}

export default App
