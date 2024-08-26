// import Footer from "../components/Footer"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import Paragraph from "../components/Paragraph"
import { motion } from "framer-motion"
import { useCursorStore } from "../store"


const ContactSec = () => {

  const setCursor = useCursorStore(state => state.setCursorVariant);

  return (
    <div id="about" className=" h-screen gap-10 relative flex flex-col overflow-hidden justify-center items-center text-8xl bg-[#a08241]">
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
        <motion.div className="z-10 px-10 text-[20px] text-black tablet:px-28 laptop:px-36 normal:px-40 tablet:text-2xl laptop:text-3xl normal:text-4xl font-handwriting"
           initial={{opacity: 0.1,}}
           whileInView={{opacity: 1, transition: {duration: 1, stiffness: 100, type: "spring"}}}
           viewport={{ amount: 0.9, once: false }}
           >
          <Paragraph text="Hey there! I hope you liked my projects above. I'm Prashant, a Full Stack Software Engineer at Rediker Software. With double major in Computer & Information Sciences and Art & Design, my passion lies in crafting intuitive yet creative digital experiences in softwares and design." />
          <Paragraph text="My previous roles as Web Developer at Springfield College and an Undergrad Research Assistant for Motion Tracker Lab (a Computer Vision research software) have made my software development foundation very strong." />
          <Paragraph text="With a handful of impressive experiences already under my belt, my journey is an exhilarating tale of blending design and coding to create software solutions that is efficient and pleasing. " />
          <Paragraph text="If you're seeking a jack-of-all-trades who thrives on innovation and owns the project with strong passion, look no further!" />
        </motion.div>

        <motion.div
          initial={{scale: 0.95}}
          whileInView={{scale: 1, transition: {duration: 1, stiffness: 100, type: "spring"}}}
          viewport={{ amount: "all", once: false }}
         className="z-10 flex items-center gap-24 text-3xl tablet:text-4xl laptop:text-5xl normal:text-6xl">
    
            <a target="_blank" href="https://github.com/tprashant-21"><BsGithub onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="duration-100 ease-in hover:scale-125" /></a>
            <a target="_blank" href="mailto:ptimalsina@springfieldcollege.edu"><MdEmail onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="text-4xl duration-100 ease-in hover:scale-125 tablet:text-5xl laptop:text-6xl normal:text-7xl"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/prashant-timalsina-97605720a/"><BsLinkedin onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="duration-100 ease-in hover:scale-125"  /></a>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {duration: 1, delay:0.1}}}
          viewport={{ amount: "all", once: false }}
          className="absolute bottom-0 p-3 text-xl text-black tablet:text-2xl font-handwriting">
           with ❤️ by Prashant Timalsina
        </motion.div>

        
    </div>
  )
}

export default ContactSec