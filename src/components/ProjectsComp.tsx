
import { FaFileCode, FaFileImage } from "react-icons/fa"
import { WebProjects } from "../lists/WebProjects"

type props = {
  project: typeof WebProjects[0],
  i: number
}

const ProjectsComp = ({project, i}: props) => {
  return (
    <div key={i} className="border-2 mt-[50px] border-gray-200 rounded-2xl border-dashed w-[90%] mx-auto">
        <div className="flex flex-col-reverse items-center justify-center p-10 gap-y-4 laptop:flex-row">

          <div className="flex items-center justify-center px-5 tablet:px-9 normal:px-12"> 
          <p>
            <span className="text-xl font-bold normal:text-2xl font-poppins">{project.title}</span> 
            <br/><br/> {project.description} <br/><br/> {project.detail} <br/><br/>
  
            {project.tech.map((tech, i) => 
              <span key={i} className="inline-flex items-center px-2 py-1 ml-1 text-[9px] normal:text-xs font-medium text-black bg-gray-200 rounded-md">{tech}</span>
            )}

          </p>
          </div>

          <div className="w-[20%] flex items-center gap-24 justify-center flex-row laptop:flex-col">

            <a href={project.github} target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileCode className="text-2xl text-gray-300" />
              <p className="text-xs text-center">Source Code</p>
            </div>
            </a>

            <a href={project.live} target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileImage className="text-2xl text-gray-300" />
              <p className="text-xs text-center">Live <br/> Demo </p>
            </div>
            </a>

          </div>

          <div className="flex items-center justify-center">
            <img className="w-[85%] rounded-xl shadow-lg" src={project.image} />
          </div>

         </div> 
    </div>
  )
};

export default ProjectsComp