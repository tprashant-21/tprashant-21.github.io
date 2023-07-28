import ProjectHeader from "../components/ProjectHeader"
import {motion} from "framer-motion"
import { TabTitle } from "../Utils/GeneralFunc"

const Robotics = () => {

  TabTitle('Robotics - Prashant');

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: { duration: 0.5, ease: "easeInOut"}}}
      className="container mx-auto max-w-[2000px]">
        
      <ProjectHeader title={"Robotics & others"} prev={"Animation"} linkPrev="/animation" next={"Web Dev"} linkNext={"/webdev"}/>

    </motion.div>
  )
}

export default Robotics