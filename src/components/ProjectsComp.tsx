
import { FaFileCode, FaFileImage } from "react-icons/fa"
import { WebProjects } from "../lists/WebProjects"
import { motion } from "framer-motion"

import {useCursorStore} from "../store"

type props = {
  project: typeof WebProjects[0],
  i: number
}

const ProjectsComp = ({project, i}: props) => {

  const setCursor = useCursorStore(state => state.setCursorVariant)

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 1, duration: 0.5, ease: "easeInOut"}}}
      
      key={i} className="border-2 mt-[50px] border-gray-200 rounded-2xl border-dashed w-[90%] mx-auto">
        <div className="flex flex-col-reverse items-center justify-center px-5 py-5 laptop:py-10 laptop:px-14 gap-y-6 laptop:flex-row">

          <div className="flex items-center justify-center flex-1 "> 
          <p className="text-sm tablet:text-base" >
            <span className="text-2xl font-bold tablet:text-3xl font-poppins">{project.title}</span> 
            <br/><br/> {project.description} <br/><br/> {project.detail} <br/><br/>
  
            {project.tech.map((tech, i) => 
              <span key={i} className="inline-flex items-center px-2 py-1 ml-1 mt-1 text-[9px] tablet:text-xs font-medium text-black bg-gray-200 rounded-md">{tech}</span>
            )}

          </p>
          </div>

          <div className="w-[10%] text-[9px] tablet:text-xs flex flex-row items-center justify-center gap-24  laptop:flex-col">

            <a  href={project.github} onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileCode className="text-lg text-gray-300 tablet:text-2xl" />
              <p className="text-center ">Source</p>
            </div>
            </a>

            <a href={project.live} onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileImage className="text-xl text-gray-300 tablet:text-2xl" />
              <p className="text-center ">Demo </p>
            </div>
            </a>

          </div>

          <div className="flex items-center justify-center flex-1 overflow-hidden rounded-xl ">
            <a onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} target="_blank" href={project.live}><img className="transition-all duration-200 ease-in shadow-lg hover:scale-105 rounded-xl" src={project.image} /></a>
          </div>

         </div> 
    </motion.div>
  )
};

export default ProjectsComp