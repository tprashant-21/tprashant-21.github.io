import { motion } from "framer-motion"
import {CiLocationOn} from 'react-icons/ci'
import {PiGraduationCapLight} from 'react-icons/pi'

const Header = () => {
  return (
    //container
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.6, type: 'spring', stiffness: 100 }}
    className="pt-[15px] h-[50px] mx-auto font-poppins text-lg flex justify-around font-medium text-[#DDDBDB]">
        

        <div className="flex gap-x-32 z-10  items-center">
            <p className="underline decoration-2 underline-offset-4 decoration-zinc-700 decoration-dashed text-3xl text-black font-handwriting">Prashant Timalsina</p>
            <div className=" relative"> 
                <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: [0.5,2,2,1]}}
                // transition={{ delay: 2, duration: 1, type: 'spring', stiffness: 100 }}
                ><CiLocationOn className=" absolute -top-[5px] -left-[35px] text-3xl"/></motion.div>
                <p>Based in Springfield, MA</p>
            </div>
            <div className="relative">
            <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: [0.5,2,2,1]}}
                // transition={{ delay: 2, duration: 1, type: 'spring', stiffness: 100 }}
                >
                <PiGraduationCapLight className=" absolute -top-[5px] -left-[40px] text-[28px]"/>
            </motion.div>
                <p>Rising Senior in CS + Arts & Design</p>
            </div>
        </div>

        <div className="flex gap-x-10 z-10 items-center">
            <a>About</a>
            <a>Projects</a>
            <a>More</a>
            <a>Contact</a>
        </div>
    </motion.div>
  )
}

export default Header