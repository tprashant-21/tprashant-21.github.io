import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { MotionGraphicsProjects } from "../lists/MotionGraphicsProjects"

import { TabTitle } from "../Utils/GeneralFunc"
import { motion } from "framer-motion"

const MotionGraphicsDev = () => {

  TabTitle('Motion Graphics - Prashant');

  return (

    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { duration: 0.5, ease: "easeInOut"}}}
      className="container mx-auto max-w-[2000px]">
      
      <ProjectHeader title={"Motion Graphics"} prev={"Graphic Design"} linkPrev="/graphicdesign" next={"Content Creation"} linkNext={"/contentcreation"}/>
      

      {MotionGraphicsProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div className="mt-[50px]">

      </div>

    </motion.div>

  
  )
}

export default MotionGraphicsDev