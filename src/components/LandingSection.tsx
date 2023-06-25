import landingImage from '../assets/images/landing-image.png';
import { motion } from 'framer-motion';

const LandingSection = () => {



  return (
    <div className="relative flex items-end justify-center min-h-screen">
        <motion.p 
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: .3, transition: { duration: 1.2}}}
        className="absolute pt-[60px] tablet:pt-0 opacity-30  top-[50px] font-bg-font font-extrabold text-[52px] tablet:text-[105px] laptop:text-[150px] normal:text-[200px] 
        text-center tracking-[5px] leading-[60px] tablet:tracking-[10px] tablet:leading-[115px] laptop:leading-[160px] normal:leading-[200px]">I'M A UI/UX<br/>  <span className="text-[72px] tablet:text-[150px] laptop:text-[200px] normal:text-[262px] tracking-[-2px] tablet:tracking-[-10px]">ENGINEER</span></motion.p>
        <div className= "relative z-20">
          
            <motion.img 
            
            initial={{y: -1100}}
            whileHover={{ scale: 1.02 }}
            
            animate={{
              y: 0,
              transition: {
                delay: 1,
                type: "spring",
                bounce: 0.4,
                duration: 0.7
              }}}
            // animate={{ opacity: 1, y: 0, transition: { delay: 1.2}}}
            className=' object-contain h-[600px] tablet:h-[800px] normal:h-[900px]' src={landingImage} alt="landing-image">
            </motion.img>
            


            <motion.div
                className='absolute font-handwriting bottom-[400px] left-[440px] laptop:bottom-[180px] laptop:-left-[280px]  normal:-left-[400px] text-[18px] laptop:text-[28px] normal:text-[36px] text-black'
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { delay: 1.6}}}>
                "In the realm where art meets code,<br/> innovation becomes my canvas."
                <br/>        - Mr. P himself
            </motion.div>

            
        </div>


    </div>
  )
}

export default LandingSection