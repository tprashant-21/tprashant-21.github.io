import { RoboticsPicture, AnimationPicture, ContentCreationPicture, GraphicDesignPicture, MotionGraphicsPicture, VRDevPicture, WebDevPicture } from "../components/ProjectPicture"


export const projectList = [
    {
        title: "Web Dev",
        // route: "/webdev",
        id: 1,
        card: WebDevPicture
    },
    {
        title: "VR Dev & 3D",
        // route: "/vrdev",
        id: 2,
        card: VRDevPicture
    },
    {
        title: "Graphic Design",
        id: 3,
        card: GraphicDesignPicture
    },
    {
        title: "Motion Graphics",
        id: 4,
        card: MotionGraphicsPicture
    },
    {
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