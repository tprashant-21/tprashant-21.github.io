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
    className="pt-[15px] h-[50px] mx-auto text-sm laptop:text-lg flex justify-around gap-x-4 font-poppins font-medium text-[#DDDBDB]">
        

        <div className="z-10 flex items-center laptop:gap-x-[100px] flex-col tablet:flex-row gap-y-3 tablet:gap-y-0 gap-x-10 tablet:gap-x-28 normal:gap-x-32">
            <p className="text-lg text-black underline decoration-2 underline-offset-4 decoration-zinc-700 decoration-dashed tablet:text-xl laptop:text-2xl normal:text-3xl font-handwriting">Prashant Timalsina</p>
            <div className="relative "> 
                <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: [0.5,2,2,1]}}
                // transition={{ delay: 2, duration: 1, type: 'spring', stiffness: 100 }}
                ><CiLocationOn className=" absolute -top-[5px] -left-[35px] text-2xl tablet:text-3xl"/></motion.div>
                <p>Based in Springfield, MA</p>
            </div>
            <div className="relative">
            <motion.div
                // initial={{ opacity: 0, scale: 0 }}
                // animate={{ opacity: 1, scale: [0.5,2,2,1]}}
                // transition={{ delay: 2, duration: 1, type: 'spring', stiffness: 100 }}
                >
                <PiGraduationCapLight className=" absolute -top-[5px] -left-[40px] text-[23px] tablet:text-[28px]"/>
            </motion.div>
                <p>Rising Senior in CS + Arts & Design</p>
            </div>
        </div>

        <div className='z-10 items-center hidden laptop:flex gap-x-6 normal:gap-x-10'>
        
            <a>About</a>
            <a>Projects</a>
            <a>More</a>
            <a>Contact</a>
        </div>
        
    </motion.div>
  )
}

export default Header