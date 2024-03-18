import React from "react";

function Projects() {
  const [activeButton, setActiveButton] = React.useState(null);

  const projects = [
    { year: "//22", name: "Keyboards", type: "E-Commerce" },
    { year: "//22", name: "Computer", type: "Blog" },
    { year: "//22", name: "This is ME", type: "portfolio" },
    { year: "//23", name: "winecraft", type: "game" },
    { year: "//23", name: "Olga", type: "E-Commerce" },
    { year: "//24", name: "tsx-3000 ultra", type: "E-Commerce" },
    { year: "//24", name: "change", type: "Education" },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };
  return (
    <div className="h-screen flex flex-col justify-center pr-24">
      <p className="text-8xl pb-16">Projects</p>
      <div>
        {projects.map((project) => (
          <div key={project.year}>
            <div className="flex">
              <button className="w-1/2">
                <div className="grid grid-cols-3 text-2xl border-b border-r pr-4 py-8">
                  <p className="flex items-center">{project.year}</p>
                  <p className="flex items-center">{project.name}</p>
                  <p className="flex items-center">{project.type}</p>
                </div>
              </button>
              <div>
                <p>Hii</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

/*
<div className="text-2xl border-t  py-8 flex justify-between">
              <div className="flex gap-12 items-center">
                <p>//22</p>
                <p>Project Name</p>
                <p>Project Type</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6 pt-"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </div>
*/