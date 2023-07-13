import ProjectHeader from "../components/ProjectHeader"

import ProjectsComp from "../components/ProjectsComp"

import { VRProjects } from "../lists/VRProjects"




const VRDev = () => {
  return (

    <div className="container mx-auto max-w-[2000px]">
      <ProjectHeader />

      <div className="mt-[100px] tablet:mt-[50px] text-5xl font-poppins font-extrabold text-center">
        VR Dev & 3D <span className="text-2xl bg-purple rounded-xl font-handwriting">Projects</span>
      </div>

      {VRProjects.map((project,i) =>
      <ProjectsComp project={project} i={i} />
      )}

      <div>
        <div className="m-[100px] tablet:m-[50px] text-5xl font-handwriting font-extrabold text-center">
         For more VR & 3D projects, visit my <a href="https://github.com/tprashant-21" target="_blank" className="text-4xl underline font-poppins">github</a> </div>
      </div>

    </div>

  
  )
}

export default VRDev