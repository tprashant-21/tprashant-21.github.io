import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {FaCircle} from 'react-icons/fa'
// import {BsSendFill} from 'react-icons/bs'

const Cursor = () => {

    const [mousePosition, setMousePosition] = useState({
        x: -20,
        y: -20
      });
      const [cursorVariant, setCursorVariant] = useState("default");
    
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
    
      const variants: any = {
          default: {
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
              transition: { duration: 0}
          },
          text: {
              height: 150,
              width: 150,
              x: mousePosition.x - 75,
              y: mousePosition.y - 75,
              transition: { duration: 0},
              backgroundColor: "yellow",
              mixBlendMode: "difference"
          }
      }

      // Engineer to designeer

    
      const textEnter = () => setCursorVariant("text");
      const textLeave = () => setCursorVariant("default");

  return (
    
    <motion.div 
        className="fixed top-0 left-0 z-40 pointer-events-none "
        variants={variants}
        animate={cursorVariant}>
            <FaCircle className="text-[32px] text-gray-100"/>
            {/* <BsSendFill className="text-[32px] text-gray-100" /> */}
    </motion.div>
  )
}

export default Cursor

