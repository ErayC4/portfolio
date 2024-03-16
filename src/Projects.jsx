import React from "react";

function Projects() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <p className="text-8xl">Projects</p>

      <div className="text-2xl border-t mt-16 pt-4 flex justify-between">
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
        <div className="flex items-center gap-4">
          <p>React</p>
          <p>Html</p>
          <p>Css</p>
          <p>NextJs</p>
          <p>Threejs</p>
        </div>
      </div>
      
    </div>
  );
}

export default Projects;
