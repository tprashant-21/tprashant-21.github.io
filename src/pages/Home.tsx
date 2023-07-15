
import ContactSec from "../sections/ContactSec"
import LandingSec from "../sections/LandingSec"
import Projects from "../sections/Projects"

import { TabTitle } from "../Utils/GeneralFunc"

const Home = () => {

  TabTitle(`Prashant's Portfolio`);

  return (

    <div className="container select-none mx-auto max-w-[2000px]">

      <LandingSec   /> 
      <Projects />
      <ContactSec />

    </div>
  )
}

export default Home