import ProjectList from "../components/ProjectList"
import { useRef } from "react"
import hover3d from "../Utils/HoverCard"
import { projectList } from "../lists/ProjectList"

import { useCursorStore } from "../store"





const Projects = () => {

    const ref = useRef<HTMLDivElement>(null);

    const setCursor = useCursorStore(state => state.setCursorVariant);

    const hoverHero = hover3d(ref, {
        x: 8,
        y: -3,
        z: 0,
      });

  return (
    <div ref={ref} id="projects"  className="border-y-[9px] border-[#DDDBDB] min-h-screen">
        <div className="flex items-start w-full gap-3 tablet:gap-10">

            <div className="flex justify-end items-center w-full py-[50vh]">
                <ul>
                    {projectList.map((project, id) => (
                        <li key={id}>
                            <ProjectList id={project.id.toLocaleString()} >{project.title}</ProjectList>
                        </li>
                    ))}
                </ul>
            </div >

            <div  className="sticky top-0 flex items-center justify-center w-full h-screen">
                <div onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} style={{transform: hoverHero.transform, transition: hoverHero.transition}}
             className="relative  border-[#DDDBDB] border-[4px] tablet:border-[6px] laptop:border-[9px] flex justify-center items-center w-[200px] tablet:w-[350px] laptop:w-[500px] normal:w-[600px] aspect-square rounded-[5%]">
                    <div className="text-xl text-[#DDDBDB] tablet:text-4xl laptop:text-6xl font-handwriting">My projects</div>
                    {projectList.map((project) => (
                        < project.card id={project.id.toLocaleString()} key={project.id}/>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )

}

export default Projects