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
        <div className="flex w-full gap-20 items-start">

            <div className="pl-60 w-full py-[50vh]">
                <ul>
                    {projectList.map((project, id) => (
                        <li key={id}>
                            <ProjectList id={project.id.toLocaleString()} >{project.title}</ProjectList>
                        </li>
                    ))}
                </ul>
            </div >

            <div className="w-full sticky top-0 h-screen flex justify-center items-center">
                <div className="relative w-2/3 aspect-square bg-gray-100 rounded-2xl">
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