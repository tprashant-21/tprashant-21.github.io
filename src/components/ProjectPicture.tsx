import { useFeatureStore } from "../store";

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
        className={`absolute inset-0 w-full h-full transition-opacity text-white rounded-md laptop:rounded-2xl bg-gradient-to-br
         ${gradient} ${inViewFeature === id ? "opacity-100": "opacity-0"}`}>
          {children}
    </div>
  );
};

export const WebDevPicture = ({id}: CardProps) => {
    return (
      
      <> 
      <Link target="_blank" to="/webdev"> 
      <ProjectPicture id={id} gradient="from-[#4F9292] to-[#89BFBF]">      
      <img
        className="absolute z-10 left-[10%] rotate-1  top-[4%] w-[50%] rounded-xl shadow-lg transition-transform"
        src="/web-motiontracker.webp"
        alt="motion tracker"
      />
      
    
      <img
      className="absolute z-10 left-[10%] -rotate-1 top-[68%] w-[53%]  rounded-lg shadow-lg transition-transform"
        src="/web-disney-clone.webp"
        alt="disney clone"
      />

      

      <img
        className=
          "absolute z-10 bg-[#f3a5d0] rotate-2 left-[35%] top-[35%]  w-[54%] rounded-xl shadow-xl transition-transform"
        src="/web-glicee.webp"
        alt="glicee"
      />

        <OpenInNew /> 
        
      </ProjectPicture>
      </Link>
      </>

    );
};

export const VRDevPicture = ({id}: CardProps) => {
    return (

      <> 
      <Link target="_blank" to="/vrdev"> 
      <ProjectPicture id={id} gradient="from-[#7383A2] to-[#B4C1D4]">

      <img
        className=
          "absolute z-10 left-[28%] top-[22%] w-[43%] rounded-xl shadow-3xl transition-transform"
        src="/vrlab.webp"
        alt="vr lab"
      />

      <img
        className="absolute z-10 scale-90 bg-gray-100 left-[10%] top-[6%] w-[27%] rounded-xl transition-transform"
        src="/vrbadge.webp"
        alt="vr badge"
      />  

    <img
      className="absolute z-10 left-[54%] top-[12%] w-[34%] rotate-2 rounded-xl shadow-lg transition-transform"
        src="/vr-gallery.webp"
        alt="vr gallery"
      />
      

      <img
      className="absolute z-10 left-[15%] scale-125  top-[71%] w-[31%] -rotate-1 rounded-xl shadow-lg transition-transform"
        src="/vr-basketbrawl.webp"
        alt="vr basketbrawl"
      />

      
      <OpenInNew /> 
      

      </ProjectPicture>
      </Link>
      </>
    );
};

export const MotionGraphicsPicture = ({id}: CardProps) => {
    return (

      <> 
      <Link target="_blank" to="/motiongraphics"> 
      <ProjectPicture id={id} gradient="from-[#CB6C71] to-[#E9A9AC]">

        <img
          className="absolute z-10 left-[28%] -rotate-[6deg] top-[9%] w-[42%] rounded-xl shadow-lg transition-transform"
          src="/motion-cr7.webp"
          alt="cr7"
        />
        
      
        <img
        className="absolute z-10 left-[17%] top-[29%] w-[60%] rotate-2 rounded-xl shadow-lg transition-transform"
          src="/motion-labyrinth.webp"
          alt="labyrinth"
        />


        <img
          className=
            "absolute z-10 bg-[#f3a5d0] -rotate-1 left-[8%] top-[50%]  w-[75%] rounded-xl shadow-xl transition-transform"
          src="/motion-im-yu.webp"
          alt="im yu"
        />

      
      <OpenInNew /> 
      
      </ProjectPicture>
      </Link>
      </>
    );
};

export const GraphicDesignPicture = ({id}: CardProps) => {
    return (

      <> 
      <Link target="_blank" to="/graphicdesign"> 
      <ProjectPicture id={id} gradient="from-[#A59C94] to-[#DAD4CD]">

        <img
          className="absolute z-10 left-[10%] -rotate-2 top-[4%] w-[50%] rounded-xl shadow-lg transition-transform"
          src="/graphic-pig.webp"
          alt="pig"
        />
        
      
        <img
        className="absolute z-10 left-[11%] top-[69%] w-[49%] rotate-1 rounded-xl shadow-lg transition-transform"
          src="/graphic-metamorphosis.webp"
          alt="metamorphosis"
        />


        <img
          className=
            "absolute z-10 bg-[#f3a5d0] left-[36%] top-[36%] rotate-3 w-[55%] rounded-xl shadow-xl transition-transform"
          src="/graphic-religion.webp"
          alt="religion"
        />

      
        <OpenInNew /> 
      
      </ProjectPicture>
      </Link>
      </>
    );
};

export const ContentCreationPicture = ({id}: CardProps) => {
    return (

      <> 
      <Link target="_blank" to="/contentcreation"> 
      <ProjectPicture id={id} gradient="from-[#B4838F] to-[#DAB1B7]">

        <img
          className="absolute z-10 left-[46%] -rotate-1 top-[9%] w-[45%] rounded-xl shadow-lg transition-transform"
          src="/content-parade.webp"
          alt="parade"
        />
        
      
        <img
        className="absolute z-10 left-[8%] z-10 top-[66%] w-[50%] rotate-1 rounded-xl shadow-lg transition-transform"
          src="/content-trivia-2.webp"
          alt="trivia"
        />


        <img
          className=
            "absolute z-10 bg-[#f3a5d0] left-[12%] top-[29%] -rotate-0 w-[76%] shadow-3xl rounded-xl shadow-xl transition-transform"
          src="/content-honors.webp"
          alt="honors"
        />

        
      <OpenInNew /> 
      
      </ProjectPicture>
      </Link> 
      </>
    );
};

export const AnimationPicture = ({id}: CardProps) => {
    return (

      <> 
      <Link target="_blank" to="/animation"> 
      <ProjectPicture id={id} gradient="from-[#61817C] to-[#A7C3BB]">

        <img
        className="absolute z-10 left-[19%] top-[11%] w-[68%] rounded-xl shadow-lg transition-transform"
          src="/animation-3d.webp"
          alt="3d"
        />


        <img
          className=
            "absolute z-10 bg-[#f3a5d0] left-[9%] top-[48%] w-[70%] rounded-xl shadow-xl transition-transform"
          src="/animation-2d.webp"
          alt="2d"
        />

        
        <OpenInNew /> 
      
      </ProjectPicture>
      </Link>
      </>
    );
};



export const RoboticsPicture = ({id}: CardProps) => {
    return (

      <> 
      <ProjectPicture id={id} gradient="from-[#6B6B6B]  to-[#B9B9B9]">
      <Link target="_blank" to="/robotics"> 
        
        <OpenInNew /> 
      </Link> 
      </ProjectPicture>
      
      </>
    );
};