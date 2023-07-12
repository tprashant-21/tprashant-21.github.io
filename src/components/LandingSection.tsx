import landingImage from '../assets/images/landing-image.png';
import { motion } from 'framer-motion';
import {useCursorStore} from "../store"
import { useState } from 'react';
import {BsSendFill} from 'react-icons/bs'



const LandingSection = () => {

  const [hovered, setHovered] = useState(false);
  const setCursor = useCursorStore(state => state.setCursorVariant);
  const cursorVariant = useCursorStore(state => state.cursorVariant);
  
  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };


  return (
    <div className="relative flex items-end justify-center min-h-screen">
        <motion.p 
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: .3, transition: {delay:.2, duration: 1.2}}}
        className="absolute pt-[60px] tablet:pt-0 opacity-30  top-[50px] font-bg-font font-extrabold text-[52px] tablet:text-[105px] laptop:text-[150px] normal:text-[200px] 
        text-center tracking-[5px] leading-[60px] tablet:tracking-[10px] tablet:leading-[115px] laptop:leading-[160px] normal:leading-[200px]">I'M A UI/UX<br/>  
        <span  
        onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}
        className={`z-10 text-[72px] tablet:text-[150px] laptop:text-[200px] normal:text-[262px] tracking-[-2px] tablet:tracking-[-10px]`}>{hovered? "DESIGNER" : "ENGINEER"}</span>
        </motion.p>
        <div className= "relative z-20">
          
            <motion.img 
            
            initial={{opacity: 0, rotate: 10, y: -1200}}
            whileHover={{ scale: 1.02 }}
            
            animate={{
              opacity: 1,
              rotate: 0,
              y: 0,
              transition: {
                delay: 2,
                type: "spring",
                ease: "easeOut",
                duration: 0.7
              }}}
            // animate={{ opacity: 1, y: 0, transition: { delay: 1.2}}}
            className=' object-contain h-[600px] tablet:h-[800px] normal:h-[900px]' src={landingImage} alt="landing-image">
            </motion.img>
            


            <motion.div
                className='absolute group font-handwriting bottom-[400px] left-[440px] laptop:bottom-[180px] laptop:-left-[280px]  normal:-left-[400px] text-[18px] laptop:text-[28px] normal:text-[36px] text-black'
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { delay: 2.5}}}>
                "In the realm where art meets code,<br/> innovation becomes my canvas."
                <br/>        -<span className='group-hover:underline decoration-2 underline-offset-4 decoration-dashed'>Mr. P himself</span> 
            </motion.div>

            <motion.div 
            onMouseEnter={()=>setCursor("text")} onMouseLeave={()=>setCursor("default")}
            animate={{rotate: 360 }}
            transition={{ ease: "linear", duration: 8, repeat: Infinity }}
            className=" h-[210px]  rounded-full font-bold w-[210px] font-poppins absolute bottom-[150px] left-[680px] text-black'">
              <div className='relative'>
                <svg viewBox="0 0 200 200">
                  <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" stroke-width="0"></path>
                  <g font-size="22px">
                    <text text-anchor="start">
                      <textPath xlinkHref="#textPath" startOffset="0%"> --- HIRE ME  ---  HIRE ME  ---  HIRE ME --- HIRE ME </textPath>
                    </text>
                  </g>
                </svg>

                {cursorVariant === "default"? <BsSendFill className="text-[60px] absolute left-[35%] top-[35%] text-gray-100" /> : null }

              </div>
            </motion.div>  

            <div className='absolute bottom-0 w-full text-lg text-center text-white bg-black tablet:hidden'>VISIT ON DESKTOP FOR RICHER EXPERIENCE</div>

            
        </div>


    </div>
  )
}

export default LandingSection