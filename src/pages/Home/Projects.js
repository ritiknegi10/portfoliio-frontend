import { React, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3   "
                    : "text-white"
                } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center max-w-1/3 max-h-1/3 gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt=""
            className="max-h-60 sm:max-h-28"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemIndex].title}
            </h1>{" "}
            <div className="flex gap-2">
              <button>
                <a
                  className=" border border-secondary text-white bg-primary py-2 px-4 rounded-md"
                  href={projects[selectedItemIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </a>
              </button>
              <button>
                <a
                  className=" border border-secondary text-white bg-primary  py-2 px-4 rounded-md"
                  href={projects[selectedItemIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view code
                </a>
              </button>
            </div>
            <p className="text-white flex flex-col gap-2 ">
              {" "}
              {projects[selectedItemIndex].technologies}
            </p>
            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
