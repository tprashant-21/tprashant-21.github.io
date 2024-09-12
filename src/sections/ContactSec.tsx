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
          <Paragraph text="Hey there! I'm Prashant Timalsina, a Full Stack Software Engineer at Rediker Software with a unique blend of expertise in Computer Science and Art & Design. My passion lies in creating digital experiences that are not only functional but also visually engaging, ensuring a seamless fusion of technology and creativity." />
          <Paragraph text="In my previous roles as a Web Developer at Springfield College and an Undergraduate Research Assistant for the Motion Tracker Lab—where I worked on a cutting-edge Computer Vision research software—I strengthened my foundation in software development, mastering both the technical and aesthetic aspects of building intuitive systems." />
          <Paragraph text="With a diverse range of experience in design and development, my journey is a testament to the powerful synergy between code and creativity. I thrive on crafting software solutions that are as efficient as they are beautiful, delivering user-friendly interfaces that solve real-world problems." />
          <Paragraph text="If you're looking for a versatile, innovation-driven engineer who brings passion and ownership to every project, I'd love to help turn your ideas into reality!" />
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
