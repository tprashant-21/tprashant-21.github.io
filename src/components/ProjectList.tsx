import {useEffect, useRef} from 'react';
import { useInView } from 'framer-motion';
import { useFeatureStore } from '../store';


type Props = {
    children: React.ReactNode;
    id: string;
}

const ProjectList = ({children, id}: Props) => {

    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});
    const setInViewFeature = useFeatureStore(state => state.setInViewFeature);
    const inViewFeature = useFeatureStore(state => state.inViewFeature);

    useEffect(() => {
      if(isInView) setInViewFeature(id);
      if(!isInView && inViewFeature === id) setInViewFeature(null);
    }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p ref={ref} className={`text-lg tablet:text-4xl laptop:text-6xl normal:text-7xl py-16 font-poppins ${isInView ? "text-white" : "text-gray-500" }`}>
        {children}
    </p>
  )
}

export default ProjectList