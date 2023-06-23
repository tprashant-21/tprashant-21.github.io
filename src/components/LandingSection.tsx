import landingImage from '../assets/images/landing-image.png';
import { motion } from 'framer-motion';

const LandingSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
        <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: .3, transition: { duration: 1.2}}}
        className="absolute opacity-30 top-[50px] font-bg-font font-extrabold text-[200px] text-center tracking-[10px] leading-[200px]">I'M A UI/UX  <span className="text-[262px] tracking-[-10px]">ENGINEER</span></motion.p>
        <div className= "z-20 relative">
            <motion.img 
            initial={{ opacity: 0, y: -1100}}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.2}}}
            className=' ml-[60px] object-contain w-[700px] h-[950px]' src={landingImage} alt="landing-image">
            </motion.img>
            <motion.div
                className='absolute font-handwriting bottom-[200px] -left-[400px] text-[36px] text-black'
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { delay: 1.6}}}>
                "In the realm where art meets code,<br/> innovation becomes my canvas."
            </motion.div>
            <motion.div
                className='absolute underline decoration-black decoration-dashed decoration-2 underline-offset-4 font-handwriting bottom-[140px] -left-[200px] text-[36px] text-black'
                initial={{ opacity: 0}}
                animate={{ opacity: 1, transition: { delay: 2}}}>
                - Mr. P himself
            </motion.div>
        </div>


    </div>
  )
}

export default LandingSection