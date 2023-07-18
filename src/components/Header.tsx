import { motion } from "framer-motion"
import {CiLocationOn} from 'react-icons/ci'
import {PiGraduationCapLight} from 'react-icons/pi'

import { useCursorStore } from "../store"


const Header = () => {

    const setCursor = useCursorStore(state => state.setCursorVariant);


    const variants: any = {
        hidden: { opacity: 0},
        show: { opacity: 1,
        transition: { duration: .5, delay: 1.9 } }
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
                <div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: [0.5,2,2,1]}}
                // transition={{ delay: 2, duration: 1, type: 'spring', stiffness: 100 }}
                ><CiLocationOn className=" absolute -top-[5px] -left-[35px] text-2xl tablet:text-3xl"/></div>
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
            <a onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="cursor-pointer hover:underline">About</a>
            <a onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="cursor-pointer hover:underline">Projects</a>
            <a onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="cursor-pointer hover:underline">CV</a>
            <a onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")} className="cursor-pointer hover:underline">Contact</a>
        </div>
        
    </motion.div>
  )
}

export default Header