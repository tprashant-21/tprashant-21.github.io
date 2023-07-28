import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { ContentCreationProjects } from "../lists/ContentCreationProjects"

import { TabTitle } from "../Utils/GeneralFunc"
import { motion } from "framer-motion"

const ContentCreationDev = () => {
  
  TabTitle('Content Creation - Prashant');

  return (

    <motion.div 
       initial={{opacity: 0}}
       animate={{opacity: 1, transition: {duration: 0.5, ease: "easeInOut"}}}
       className="container mx-auto max-w-[2000px]">
      
      <ProjectHeader title={"Content Creation"} prev={"Motion Graphics"} linkPrev="/motiongraphics" next={"Animation"} linkNext={"/animation"}/>
      

      {ContentCreationProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div className="mt-[50px]">

      </div>

    </motion.div>

  
  )
}

export default ContentCreationDev