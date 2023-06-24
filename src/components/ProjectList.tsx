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

    useEffect(() => {
      if(isInView) setInViewFeature(id);
    }, [isInView, id, setInViewFeature]);

  return (
    <p ref={ref} className={`text-sm tablet:text-6xl py-16 font-bold font-bg-font ${isInView ? "text-white" : "text-gray-500" }`}>
        {children}
    </p>
  )
}

export default ProjectList