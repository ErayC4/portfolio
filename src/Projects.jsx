import React from "react";

function Projects() {
  const [activeButton, setActiveButton] = React.useState(null);

  //max 7
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
    <div className="flex flex-col justify-center pr-24">
      <p className="text-8xl pb-16">Projects</p>
      <div>

        <div className="w-1/2 text-2xl border-b py-8 flex justify-between">
          <div className="grid grid-cols-3 justify-start">
            <p className="w-64 flex items-start">Year</p>
            <p className="w-64 flex items-start">Name</p>
            <p className="w-64 flex items-start">Type</p>
          </div>
        </div>
        {projects.map((project) => (
          <div key={project.year}>
            <button onClick={handleButtonClick} className="w-1/2">
              <div className="text-2xl border-b py-8 flex justify-between">
                <div className="grid grid-cols-3 justify-start">
                  <p className="w-64 flex items-start">{project.year}</p>
                  <p className="w-64 flex items-start">{project.name}</p>
                  <p className="w-64 flex items-start">{project.type}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Projects;

/*

*/
