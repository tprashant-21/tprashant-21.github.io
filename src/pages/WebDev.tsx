import ProjectHeader from "../components/ProjectHeader"
import motiontracker from "../assets/images/motiontracker.png"
import { FaFileCode, FaFileImage } from "react-icons/fa"
import { WebProjects } from "../lists/WebProjects"




const WebDev = () => {
  return (

    <div className="container mx-auto max-w-[2000px]">
      <ProjectHeader />

      <div className="mt-[100px] tablet:mt-[50px] text-5xl font-poppins font-extrabold text-center">
        Web Dev <span className="text-2xl bg-purple rounded-xl font-handwriting">Projects</span>
      </div>

      <div className="border-2 mt-[50px] border-gray-200 rounded-2xl border-dashed w-[90%] mx-auto">
        <div className="flex flex-col-reverse items-center justify-center p-10 gap-y-4 laptop:flex-row">

          <div className="flex items-center justify-center px-5 tablet:px-9 normal:px-12"> 
          <p>
            <span className="text-xl font-bold normal:text-2xl font-poppins">{WebProjects.title}</span> 
            <br/><br/> {WebProjects.description} <br/><br/> {WebProjects.detail} <br/><br/>
  
            {WebProjects.tech.map((tech, i) => 
              <span key={i} className="inline-flex items-center px-2 py-1 ml-1 text-[9px] normal:text-xs font-medium text-black bg-gray-200 rounded-md">{tech}</span>
            )}

          </p>
          </div>

          <div className="w-[20%] flex items-center gap-24 justify-center flex-row laptop:flex-col">

            <a href="https://github.com/PiPhysics/MotionTrackerLab" target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileCode className="text-2xl text-gray-300" />
              <p className="text-xs text-center">Source Code</p>
            </div>
            </a>

            <a href="https://piphysics.github.io/MotionTrackerLab/" target="_blank"><div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105">
              <FaFileImage className="text-2xl text-gray-300" />
              <p className="text-xs text-center">Live <br/> Demo </p>
            </div>
            </a>

          </div>

          <div className="flex items-center justify-center">
            <img className="w-[85%] rounded-xl shadow-lg" src={motiontracker} />
          </div>

         </div> 
      </div>



    </div>

  
  )
}

export default WebDev