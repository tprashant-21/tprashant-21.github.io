// import Footer from "../components/Footer"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import Paragraph from "../components/Paragraph"

const ContactSec = () => {
  return (
    <div className=" h-screen gap-10 relative flex flex-col overflow-hidden justify-center items-center text-8xl bg-[#a08241]">
      <svg className="absolute opacity-90" viewBox='0 0 1550 4000' >
            <filter id='noiseFilter'>
                <feTurbulence 
                type='fractalNoise' 
                baseFrequency='0.85' 
                numOctaves='5' 
                stitchTiles='stitch'/>
            </filter>
        
            <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
        </svg>
        <div className="z-10 px-40 text-4xl text-black font-handwriting">
          <Paragraph text="Hey there! I'm Prashant, a rising senior and the proud conjurer of artistry and technology. With dual degrees in Computer Science and Arts & Design, my passion lies in crafting mesmerizing digital experiences that push the boundaries of imagination." />
          <Paragraph text="Currently, I'm weaving my magic as a Web Designer at Springfield College. I am also working as a Research Assistant building frontend system for the Motion Tracker Lab (a Computer Vision Research program) 🔬✨" />
          <Paragraph text="With a handful of impressive work experiences already under my belt, my journey is an exhilarating tale of blending creativity and coding to create websites that leave visitors awe-inspired. 💫🌐" />
          <Paragraph text="If you're seeking a web wizard who thrives on innovation and has the skills to bring dreams to life on the digital canvas, look no further! Let's weave a spell of excellence together. 🌟🎉" />
        </div>

        <div className="flex items-center gap-24 text-5xl">
            <BsGithub/>
            <MdEmail className="text-6xl"/>
            <BsLinkedin/>
        </div>

        
    </div>
  )
}

export default ContactSec