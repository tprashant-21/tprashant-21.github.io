import ProjectHeader from "../components/ProjectHeader"

import { TabTitle } from "../Utils/GeneralFunc"

const Robotics = () => {

  TabTitle('Robotics - Prashant');

  return (
    <>
      <ProjectHeader title={"Robotics & others"} prev={"Animation"} linkPrev="/animation" next={"Web Dev"} linkNext={"/webdev"}/>

    </>
  )
}

export default Robotics