import React from "react";
import projectsData from "./projectsData.json"; // Importiere die JSON-Datei

function Projects() {
  const [activeButton, setActiveButton] = React.useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="flex flex-col justify-center pr-24 pt-96">
      <p className="text-8xl pb-16">PROJECTS</p>

      <div className="grid grid-cols-2 gap-32">
        <div>
          {projectsData.map((project, index) => (
            <div className="border-t" key={index}>
              <button onClick={() => handleButtonClick(index)}>
                <div
                  className={`text-2xl  py-8 flex justify-between ${
                    activeButton === index
                      ? "bg-white text-black pl-16"
                      : "bg-transparent"
                  }`}
                >
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

        <div className="h-screen">
          {activeButton !== null && (
            <div className="bg-white text-black p-16">
              <div key={activeButton}>
                <img
                  src={projectsData[activeButton].image}
                  className="object-cover border border-black"
                />
                <div className="flex justify-between items-center w-full pb-4 border-b border-black mt-8">
                  <div className="flex">
                    <p className="text-4xl font-bold">
                      {projectsData[activeButton].name}
                    </p>
                    <button className="pl-4 pb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="w-9 h-9"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </button>
                  </div>

                  <p className="text-lg pt-4">4TH NOVEMBER 2023</p>
                </div>

                <p className="text-lg w-full pt-4">
                  {projectsData[activeButton].description}
                </p>

                <div className="flex justify-evenly py-4 text-lg border-black border mt-8">
                  {projectsData[activeButton].technologiesUsed.map(
                    (item, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && <span className="text-xl">|</span>}
                        <span className="text-lg">{item}</span>
                      </React.Fragment>
                    )
                  )}
                </div>
                <button className="w-full bg-black text-white text-2xl flex justify-center gap-4 py-4 mt-8">
                  <p>Launch</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-8 h-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
