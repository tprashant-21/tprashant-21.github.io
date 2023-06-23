import {useRef} from 'react';
import { useInView } from 'framer-motion';


type Props = {
    children: React.ReactNode;
}

const ProjectList = ({children}: Props) => {

    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});

  return (
    <p ref={ref} className={`text-5xl py-16 font-extrabold font-poppins ${isInView ? "text-black" : "text-gray-300" }`}>
        {children}
    </p>
  )
}

export default ProjectList