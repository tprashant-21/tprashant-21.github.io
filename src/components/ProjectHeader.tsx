import { motion } from "framer-motion"
import {CiLocationOn} from 'react-icons/ci'
import {PiGraduationCapLight} from 'react-icons/pi'



const ProjectHeader = () => {

    const variants: any = {
        hidden: { opacity: 0, translateY: -100 },
        show: { opacity: 1, translateY: 0,
        transition: { duration: 1.5, type: 'spring', stiffness: 50, staggerChildren: 1 } }
    }


  return (
    //container
    <motion.div 
    variants={variants}
    initial= "hidden"
    animate= "show"
    className="pt-[15px] h-[50px] mx-auto text-sm laptop:text-lg flex justify-around gap-x-4 font-poppins font-medium text-[#DDDBDB]">
        

        <div className="z-10 flex items-center laptop:gap-x-[100px] flex-col tablet:flex-row gap-y-3 tablet:gap-y-0 gap-x-10 tablet:gap-x-28 normal:gap-x-32">
            <p className="text-lg text-white underline decoration-2 underline-offset-4 decoration-zinc-700 decoration-dashed tablet:text-xl laptop:text-2xl normal:text-3xl font-handwriting">Prashant Timalsina</p>
            <div className="relative "  >
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
        
    </motion.div>
  )
}

export default ProjectHeader