
import LandingSec from "../sections/LandingSec"
import Projects from "../sections/Projects"

const Home = () => {
  return (
    <div className="container mx-auto max-w-[2000px]">

      <LandingSec   /> 
      <Projects />
      <div className="h-screen text-8xl bg-[#a28a57]">
     
      </div>

    </div>
  )
}

export default Home