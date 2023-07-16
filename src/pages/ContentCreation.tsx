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
       animate={{opacity: 1, transition: {delay: 0.5, duration: 0.5, ease: "easeInOut"}}}
       className="container mx-auto max-w-[2000px]">
      
      <ProjectHeader title={"Content Creation"} prev={"Motion Graphics"} linkPrev="/motiongraphics" next={"Animation"} linkNext={"/animation"}/>
      

      {ContentCreationProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div>
        <div className="m-[50px] text-2xl tablet:text-5xl font-handwriting font-extrabold text-center">
         For more other projects, revisit my <a href="https://github.com/tprashant-21" target="_blank" className="text-4xl underline font-poppins">profile</a> </div>
      </div>

    </motion.div>

  
  )
}

export default ContentCreationDev