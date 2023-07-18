import { motion } from "framer-motion"
import {CiLocationOn} from 'react-icons/ci'
import {PiGraduationCapLight} from 'react-icons/pi'
// import { projectList } from "../lists/ProjectList"
import { HiArrowRight } from "react-icons/hi"
import { HiArrowLeft } from "react-icons/hi"
import { useCursorStore } from "../store"

import { Link } from "react-router-dom"


type props = {
    title: string,
    linkNext: string,
    linkPrev: string,
    prev?: string,
    next: string
}


const ProjectHeader = ({title, prev, linkNext, linkPrev, next}: props) => {

    const setCursor = useCursorStore(state => state.setCursorVariant);

   

  return (
    //container
    <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}>
        <div 

        className="pt-[15px] h-[50px] mx-auto text-sm laptop:text-lg flex justify-around gap-x-4 font-poppins font-medium text-[#DDDBDB]">
            

            <div className="z-10 flex items-center laptop:gap-x-[100px] flex-col tablet:flex-row gap-y-3 tablet:gap-y-0 gap-x-10 tablet:gap-x-28 normal:gap-x-32">
                <Link onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")}  to="/"><p className="text-lg text-white underline decoration-2 underline-offset-4 decoration-zinc-700 decoration-dashed tablet:text-xl laptop:text-2xl normal:text-3xl font-handwriting">Prashant Timalsina</p></Link>
                <div className="relative "  >
                    <div><CiLocationOn className=" absolute -top-[5px] -left-[35px] text-2xl tablet:text-3xl"/></div>
                    <p>Based in Springfield, MA</p>
                </div>
                <div className="relative">
                    
                <div>
                    <PiGraduationCapLight className=" absolute -top-[5px] -left-[40px] text-[23px] tablet:text-[28px]"/>
                </div>
                    <p>Rising Senior in CS + Arts & Design</p>
                </div>
            </div>
            
        </div>

        {/* newly added  */}
        <div className="mt-[100px] flex items-end justify-around tablet:mt-[50px]  font-poppins font-extrabold text-center">
            <Link to={linkPrev}> <div onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="hidden text-3xl laptop:block">
                <HiArrowLeft className="inline-block" /> {prev} 
            </div></Link>
            <div className="relative text-3xl tablet:text-5xl">
                {title} <span className="laptop:absolute bottom-0 text-xl tablet:text-2xl -right-[70px] rounded-xl font-handwriting"> Projects</span>
            </div>
            <Link to={linkNext}> <div onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="hidden text-3xl laptop:block">
                {next} <HiArrowRight className="inline-block"/>
            </div> </Link>
        
        </div>
    </motion.div>
  )
}

export default ProjectHeader