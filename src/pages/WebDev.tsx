import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { WebProjects } from "../lists/WebProjects"





const WebDev = () => {
  return (

    <div className="container mx-auto max-w-[2000px]">
      <ProjectHeader />

      <div className="mt-[100px] tablet:mt-[50px] text-5xl font-poppins font-extrabold text-center">
        Web Dev <span className="text-2xl bg-purple rounded-xl font-handwriting">Projects</span>
      </div>

      {WebProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

    </div>

  
  )
}

export default WebDev