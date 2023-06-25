import ProjectList from "../components/ProjectList"

import { RoboticsPicture, AnimationPicture, ContentCreationPicture, GraphicDesignPicture, MotionGraphicsPicture, VRDevPicture, WebDevPicture } from "../components/ProjectPicture"

const projectList = [
    {
        title: "Web Dev",
        id: 1,
        card: WebDevPicture
    },
    {
        title: "VR Dev & 3D",
        id: 2,
        card: VRDevPicture
    },{
        title: "Motion Graphics",
        id: 3,
        card: MotionGraphicsPicture
    },{
        title: "Graphic Design",
        id: 4,
        card: GraphicDesignPicture
    },{
        title: "Content Creation",
        id: 5,
        card: ContentCreationPicture
    },{
        title: "Animation",
        id: 6,
        card: AnimationPicture
    },{
        title: "Robotics & others",
        id: 7,
        card: RoboticsPicture
    },

]

const Projects = () => {
  return (
    <div className="border-y-[9px] border-[#DDDBDB] min-h-screen">
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

            <div className="sticky top-0 flex items-center justify-center w-full h-screen">
                <div className="relative flex justify-center items-center w-[200px] tablet:w-[350px] laptop:w-[500px] normal:w-[600px] bg-[#DDDBDB] aspect-square rounded-2xl">
                    <div className="text-xl text-black tablet:text-4xl laptop:text-6xl font-handwriting">My projects</div>
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