import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { GraphicDesignProjects } from "../lists/GraphicDesignProjects"

import { TabTitle } from "../Utils/GeneralFunc"

import { motion } from "framer-motion"


const GraphicDesignDev = () => {

  TabTitle('Graphic Design - Prashant');
  return (

    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5, ease: "easeInOut"}}}
      className="container mx-auto max-w-[2000px]">
      
      <ProjectHeader title={"Graphic Design"} prev={"VR Dev & 3D"} linkPrev="/vrdev" next={"Motion Graphics"} linkNext={"/motiongraphics"}/>
      

      {GraphicDesignProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

        <div className="mt-[50px]">

        </div>

    </motion.div>

  
  )
}

export default GraphicDesignDev