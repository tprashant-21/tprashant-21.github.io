
import { FaFileCode, FaFileImage } from "react-icons/fa"
import { WebProjects } from "../lists/WebProjects"


import {useCursorStore} from "../store"

type props = {
  project: typeof WebProjects[0],
  i: number
}

const ProjectsComp = ({project, i}: props) => {

  const setCursor = useCursorStore(state => state.setCursorVariant)

  return (
    <div key={i} className="border-2 mt-[50px] border-gray-200 rounded-2xl border-dashed w-[90%] mx-auto">
        <div className="flex flex-col-reverse items-center justify-center py-10 px-14 gap-y-8 laptop:flex-row">

          <div className="flex items-center justify-center flex-1 "> 
          <p>
            <span className="text-xl font-bold normal:text-3xl font-poppins">{project.title}</span> 
            <br/><br/> {project.description} <br/><br/> {project.detail} <br/><br/>
  
            {project.tech.map((tech, i) => 
              <span key={i} className="inline-flex items-center px-2 py-1 ml-1 text-[9px] tablet:text-xs font-medium text-black bg-gray-200 rounded-md">{tech}</span>
            )}

          </p>
          </div>

          <div className="w-[10%] flex flex-row items-center justify-center gap-24  laptop:flex-col">

            <a href={project.github} onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileCode className="text-2xl text-gray-300" />
              <p className="text-xs text-center">Source</p>
            </div>
            </a>

            <a href={project.live} onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileImage className="text-2xl text-gray-300" />
              <p className="text-xs text-center">Demo </p>
            </div>
            </a>

          </div>

          <div className="flex items-center justify-center flex-1 overflow-hidden rounded-xl ">
            <img className="transition-all duration-200 ease-in shadow-lg hover:scale-105 rounded-xl" src={project.image} />
          </div>

         </div> 
    </div>
  )
};

export default ProjectsComp