import {Route, Routes } from "react-router-dom"
import Cursor from "./components/Cursor"

//page components 
import Home from "./pages/Home"
import WebDev from "./pages/WebDev"
import VRdev from "./pages/VRdev"
import MotionGraphics from "./pages/MotionGraphics" 
import GraphicDesign from "./pages/GraphicDesign"
import ContentCreation from "./pages/ContentCreation" 
import Animation from "./pages/Animation"
import Robotics from "./pages/Robotics.tsx"

import ScrollToTop from "./Utils/ScrollToTop"


function App() {

  
  return (

    <>

    <Cursor />

    <ScrollToTop />


    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/webdev" element={<WebDev/>} />
      <Route path="/vrdev" element={<VRdev/>} />
      <Route path="/motiongraphics" element={<MotionGraphics/>} />
      <Route path="/graphicdesign" element={<GraphicDesign/>} />
      <Route path="/contentcreation" element={<ContentCreation/>} />
      <Route path="/animation" element={<Animation/>} />
      <Route path="/robotics" element={<Robotics/>} />
    </Routes>  
    
    </>
  )
}

export default App
