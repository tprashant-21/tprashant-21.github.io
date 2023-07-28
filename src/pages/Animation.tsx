import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { AnimationProjects } from "../lists/AnimationProjects"

import { TabTitle } from "../Utils/GeneralFunc"

import { motion } from "framer-motion"


const Animation = () => {
  TabTitle('Animation - Prashant');
  return (

    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { duration: 0.5, ease: "easeInOut"}}}
      className="container  mx-auto max-w-[2000px]">
     
     <ProjectHeader title={"Animation"} prev={"Content Creation"} linkPrev="/contentcreation" next={"Robotics & others"} linkNext={"/robotics"}/>


      {AnimationProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div className="mt-[50px]">

      </div>

    </motion.div>

  
  )
}

export default Animation


