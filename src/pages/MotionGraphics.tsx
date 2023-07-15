import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { MotionGraphicsProjects } from "../lists/MotionGraphicsProjects"

import { TabTitle } from "../Utils/GeneralFunc"


const MotionGraphicsDev = () => {

  TabTitle('Motion Graphics - Prashant');

  return (

    <div className="container mx-auto max-w-[2000px]">
      <ProjectHeader />

      <div className="mt-[100px] tablet:mt-[50px] text-5xl font-poppins font-extrabold text-center">
        Motion Graphics <span className="text-2xl bg-purple rounded-xl font-handwriting">Projects</span>
      </div>

      {MotionGraphicsProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div>
        <div className="m-[100px] tablet:m-[50px] text-5xl font-handwriting font-extrabold text-center">
         For more other projects, revisit my <a href="https://github.com/tprashant-21" target="_blank" className="text-4xl underline font-poppins">profile</a> </div>
      </div>

    </div>

  
  )
}

export default MotionGraphicsDev