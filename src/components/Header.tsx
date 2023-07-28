import { motion } from "framer-motion"
import {CiLocationOn} from 'react-icons/ci'
import {PiGraduationCapLight} from 'react-icons/pi'
import {MdSimCardDownload} from "react-icons/md"
import { useCursorStore } from "../store"

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {

    const setCursor = useCursorStore(state => state.setCursorVariant);


    const variants = {
        hidden: { opacity: 0},
        show: { opacity: 1,
        transition: { duration: .5, delay: 1.9 } 
    }
    }


  return (
    //container
    <motion.div 
    variants={variants}
    initial= "hidden"
    animate= "show"
    className="pt-[15px] h-[50px] mx-auto text-sm laptop:text-lg flex justify-around gap-x-4 font-poppins font-medium text-white">
        

        <div className="z-10 flex items-center laptop:gap-x-[100px] flex-col tablet:flex-row gap-y-3 tablet:gap-y-0 gap-x-10 tablet:gap-x-28 normal:gap-x-32">
            <p className="text-lg text-black underline decoration-2 underline-offset-4 decoration-zinc-700 decoration-dashed tablet:text-xl laptop:text-2xl normal:text-3xl font-handwriting">Prashant Timalsina</p>
            <div className="relative ">
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

        <div className='z-10 items-center hidden laptop:flex gap-x-6 normal:gap-x-10'>
            <AnchorLink href='#about' onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="cursor-pointer ">About</AnchorLink> 
            <AnchorLink href='#projects' onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="cursor-pointer">Projects</AnchorLink>
            <a download={true} href="/Prashant-Timalsina-Resume-Aug-2023.pdf" onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="flex items-center px-2 duration-100 ease-in bg-black cursor-pointer hover:scale-125 rounded-xl">CV  <MdSimCardDownload className="inline-block ml-1 text-xl" /></a>
        </div>
        
    </motion.div>
  )
}

export default Header