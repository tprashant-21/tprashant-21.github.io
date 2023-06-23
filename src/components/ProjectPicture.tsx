
type WebDevPictureProps = {
    gradient: string;
    children: React.ReactNode;
}

const ProjectPicture = ({gradient, children}: WebDevPictureProps) => {
  return (
    <div 
        className={`absolute inset-0 w-full h-full text-white rounded-2xl bg-gradient-to-br ${gradient}`}>
        {children}
    </div>
  );
};

export const WebDevPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const VRDevPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const MotionGraphicsPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const GraphicDesignPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const ContentCreationPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const AnimationPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};

export const RoboticsPicture = () => {
    return (
      <ProjectPicture gradient="from-[#f7f0ff] to-[#a78afe]">
          <span/>
      </ProjectPicture>
    );
};