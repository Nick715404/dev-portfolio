import { projects } from "@/constants/data";
import { SingleProject } from "./SingleProject";
import { Fragment } from "react";

const ProjectsList = () => {
  return (
    <div className="flex flex-col items-center">
      {
        projects.map((project) => (
          <Fragment key={project.id}>
              <SingleProject data={project} />
          </Fragment>
        ))
      }
    </div>
  );
};

export { ProjectsList };