import { useFeatureStore } from "../store";

import motiontracker from "../assets/images/motiontracker.png"
import glicee from "../assets/images/glicee.png"
import covid from "../assets/images/covid.png"

import vrlab from "../assets/images/vrlab.png"
import vrbadge from "../assets/images/vrbadge.png"
import basketbrawl from "../assets/images/basketbrawl.png"
import vrgallery from "../assets/images/vrgallery.png"

import buddha from "../assets/images/buddha.gif"

import OpenInNew from "./OpenInNew";




type ProjectPictureProps = {
    gradient: string;
    children: React.ReactNode;
} & CardProps;

type CardProps = {
    id: string;
}

const ProjectPicture = ({gradient, children, id}: ProjectPictureProps) => {
    const inViewFeature = useFeatureStore(state => state.inViewFeature);

  return (
    <div 
        className={`absolute inset-0 w-full h-full transition-opacity text-white rounded-2xl bg-gradient-to-br
         ${gradient} ${inViewFeature === id ? "opacity-100": "opacity-0"}`}>
        {children}
    </div>
  );
};

export const WebDevPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
          
      <img
        className="absolute left-[10%] -rotate-2 top-[4%] w-[50%] rounded-xl shadow-lg transition-transform"
        src={motiontracker}
      />
      
    
      <img
      className="absolute left-[11%] top-[69%] w-[49%] rotate-1 rounded-xl shadow-lg transition-transform"
        src={covid}
      />

      

      <img
        className=
          "absolute left-[36%] top-[36%] rotate-3 w-[51%] rounded-xl shadow-xl transition-transform"
        src={glicee}
      />

      <OpenInNew />
        
      </ProjectPicture>
    );
};

export const VRDevPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#2E3192] to-[#1BFFFF]">
          

      <img
        className=
          "absolute left-[25%] top-[22%] w-[43%] rounded-xl shadow-3xl transition-transform"
        src={vrlab}
      />

      <img
        className="absolute left-[7%] top-[6%] w-[27%] rounded-xl transition-transform"
        src={vrbadge}
      />  

    <img
      className="absolute left-[52%] top-[8%] w-[36%] rotate-2 rounded-xl shadow-lg transition-transform"
        src={vrgallery}
      />
      

      <img
      className="absolute left-[11%] top-[65%] w-[33%] -rotate-3 rounded-xl shadow-lg transition-transform"
        src={basketbrawl}
      />

      <OpenInNew/>
      </ProjectPicture>
    );
};

export const MotionGraphicsPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
          <img
          className="absolute left-[15%] top-[25%] w-[53%] rounded-xl shadow-lg transition-transform"
            src={buddha}
          />

      <OpenInNew/>
      </ProjectPicture>
    );
};

export const GraphicDesignPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#2E3192] to-[#1BFFFF]">
        <OpenInNew />
      </ProjectPicture>
    );
};

export const ContentCreationPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
        <OpenInNew />
      </ProjectPicture>
    );
};

export const AnimationPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#2E3192] to-[#1BFFFF]">
        <OpenInNew />
      </ProjectPicture>
    );
};

export const RoboticsPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
        <OpenInNew />
      </ProjectPicture>
    );
};