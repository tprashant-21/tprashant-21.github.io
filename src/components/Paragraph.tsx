import {motion} from 'framer-motion'

const Paragraph = (props: {text: string}) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1, transition: {duration: .5}}}
    viewport={{ amount: 'all', once: false }}

    
    >
        {props.text}
        <br/><br/>
    </motion.div>
  )
}

export default Paragraph