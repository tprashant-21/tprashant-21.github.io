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

      <div>
        <div className="m-[100px] tablet:m-[50px] text-5xl font-handwriting font-extrabold text-center">
         For more other projects, revisit my <a href="https://github.com/tprashant-21" target="_blank" className="text-4xl underline font-poppins">profile</a> </div>
      </div>

    </motion.div>

  
  )
}

export default GraphicDesignDev