import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {FaCircle} from 'react-icons/fa'
import {BsSendFill} from 'react-icons/bs'
import { useCursorStore } from "../store"


const Cursor = () => {

    const cursorVariant = useCursorStore(state => state.cursorVariant);

    const [mousePosition, setMousePosition] = useState({
        x: -20,
        y: -20
      });
    
    
      useEffect(() => {
          const mouseMove = (e: MouseEvent) => {
            setMousePosition({
              x: e.clientX,
              y: e.clientY
            })
          }
    
          window.addEventListener("mousemove", mouseMove);
    
          return () => {
            window.removeEventListener("mousemove", mouseMove);
          }
      }, []);
    



  return (
    
    <motion.div 
        className="fixed top-0 left-0 z-40 pointer-events-none "
        animate={{ 
          x: mousePosition.x - 16,
          y: mousePosition.y - 16}}
        transition={{duration: 0 }}
        >
          {cursorVariant === "default" ?
            <FaCircle className="text-[32px] text-gray-[#DDDBDB]"/> : cursorVariant === "text" ?
            <BsSendFill className="text-[80px] text-gray-100" /> :
            null}
            
            
            
    </motion.div>
  )
}

export default Cursor

