import { MotionBox } from "../MotionBox";
import { ProjectsList } from "./ProjectsList";

const Projects = () => {
  return (
    <section className="mb-36 md:mb-20">
      <div className="container">
        <div className="border-t-[6px] border-black pt-14 lg:pt-7">
          <MotionBox>
            <h2 className="text-6xl font-medium mb-32 lg:mb-10 lg:text-4xl">My Work</h2>
          </MotionBox>
          <ProjectsList />
        </div>
      </div>
    </section>
  );
};

export { Projects };