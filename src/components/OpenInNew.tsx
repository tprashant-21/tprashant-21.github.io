import {MdOutlineOpenInNew} from "react-icons/md"
import {motion} from "framer-motion"

import { useCursorStore } from "../store"

const OpenInNew = () => {

  const setCursor = useCursorStore(state => state.setCursorVariant);


  return (
    <motion.div 
    onMouseEnter={()=>setCursor("hover")} onMouseLeave={()=>setCursor("default")}
    animate={{ scale: [1, 1, 1.15, 1.15, 1]}}
    transition={{ ease: "easeIn", duration: 1.6, repeat: Infinity }}
    className="absolute shadow-2xl cursor-pointer z-10 h-[25px] w-[25px] tablet:h-[38px] tablet:w-[38px] left-[85%] bottom-[4.5%] flex justify-center items-center rounded-[50%] bg-white text-black text-[17px] tablet:text-xl laptop:text-4xl laptop:h-[60px] laptop:w-[60px]">
         <MdOutlineOpenInNew />
    </motion.div>
  )
}

export default OpenInNew