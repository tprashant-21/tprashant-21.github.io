import { useFeatureStore } from "../store";

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
          <span/>
      </ProjectPicture>
    );
};

export const VRDevPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#2E3192] to-[#1BFFFF]">
          <span/>
      </ProjectPicture>
    );
};

export const MotionGraphicsPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const GraphicDesignPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#2E3192] to-[#1BFFFF]">
          <span/>
      </ProjectPicture>
    );
};

export const ContentCreationPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const AnimationPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#2E3192] to-[#1BFFFF]">
          <span/>
      </ProjectPicture>
    );
};

export const RoboticsPicture = ({id}: CardProps) => {
    return (
      <ProjectPicture id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};