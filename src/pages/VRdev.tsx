import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { VRProjects } from "../lists/VRProjects"
import { TabTitle } from "../Utils/GeneralFunc"
import { motion } from "framer-motion"



const VRDev = () => {
  TabTitle('VR Dev - Prashant');
  return (

    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { duration: 0.5, ease: "easeInOut"}}}
      className="container mx-auto max-w-[2000px]">
      
      <ProjectHeader title={"VR Dev & 3D"} prev={"Web Dev"} linkPrev="/webdev" next={"Graphic Design"} linkNext={"/graphicdesign"}/>

      {VRProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div>
        <div className="m-[100px] tablet:m-[50px] text-2xl tablet:text-5xl font-handwriting font-extrabold text-center">
         For more VR & 3D projects, visit my <a href="https://github.com/tprashant-21" target="_blank" className="text-4xl underline font-poppins">github</a> </div>
      </div>

    </motion.div>

  
  )
}

export default VRDev