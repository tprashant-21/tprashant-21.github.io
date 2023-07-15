import { TabTitle } from "../Utils/GeneralFunc"
import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { WebProjects } from "../lists/WebProjects"





const WebDev = () => {
  TabTitle('Web Dev - Prashant');

  return (
    

    <div className="container mx-auto max-w-[2000px]">
      <ProjectHeader />

      <div className="mt-[100px] tablet:mt-[50px] text-5xl font-poppins font-extrabold text-center">
        Web Dev <span className="text-2xl bg-purple rounded-xl font-handwriting">Projects</span>
      </div>

      {WebProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div>
        <div className="m-[100px] tablet:m-[50px] text-5xl font-handwriting font-extrabold text-center">
         For more web projects, visit my <a href="https://github.com/tprashant-21" target="_blank" className="text-4xl underline font-poppins">github</a> </div>
      </div>

    </div>

  
  )
}

export default WebDev