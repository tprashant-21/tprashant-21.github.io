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

import {Link} from "react-router-dom";



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
      <ProjectPicture id={id} gradient="from-[#4F9292] to-[#89BFBF]">
          
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
          "absolute bg-[#f3a5d0] left-[36%] top-[36%] rotate-3 w-[51%] rounded-xl shadow-xl transition-transform"
        src={glicee}
      />

      <Link target="_blank" to="/webdev">
        <OpenInNew /> 
      </Link>
        
      </ProjectPicture>
    );
};

export const VRDevPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#7383A2] to-[#B4C1D4]">
          

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

      <Link target="_blank" to="/VRdev">
        <OpenInNew /> 
      </Link>

      </ProjectPicture>
    );
};

export const MotionGraphicsPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#CB6C71] to-[#E9A9AC]">
          <img
          className="absolute left-[15%] top-[25%] w-[53%] rounded-xl shadow-lg transition-transform"
            src={buddha}
          />

      <Link target="_blank" to="/motiongraphics">
        <OpenInNew /> 
      </Link>
      </ProjectPicture>
    );
};

export const GraphicDesignPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#A59C94] to-[#DAD4CD]">
        <Link target="_blank" to="/graphicdesign">
        <OpenInNew /> 
      </Link>
      </ProjectPicture>
    );
};

export const ContentCreationPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#B4838F] to-[#DAB1B7]">
        <Link target="_blank" to="/contentcreation">
        <OpenInNew /> 
      </Link>
      </ProjectPicture>
    );
};

export const AnimationPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#61817C] to-[#A7C3BB]">
        <Link target="_blank" to="/animation">
        <OpenInNew /> 
      </Link>
      </ProjectPicture>
    );
};



export const RoboticsPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#6B6B6B]  to-[#B9B9B9]">
        <Link target="_blank" to="/robotics">
        <OpenInNew /> 
      </Link>
      </ProjectPicture>
    );
};