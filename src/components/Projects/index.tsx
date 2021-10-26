import React, { Children } from "react";
import { StyledCard } from "../Card/style";

interface Props {
  className?: string;
  projects?: Project[];
}

interface Project {
  title: string;
}

export const Projects: React.FC<Props> = ({ className, projects }) => {
  return (
    <div className={className}>
      {projects.map((project) => {
        return <StyledCard title={project.title} key={project.title} />;
      })}
    </div>
  );
};
