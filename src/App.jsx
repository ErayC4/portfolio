import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="text-white h-full pl-12">
      <div>
        <div className="text-7xl pb-8">
          <p>Reach for the stars</p>
          <p>& Develop the future</p>
        </div>
        <button className="px-12 border border-white text-2xl py-2 rounded-full">
          Learn More
        </button>
      </div>

      <div>
        <div className="w-1/3">
          <p className="text-7xl pb-8">Profile</p>
          <p className="text-2xl pb-4">
            HEY, I'M A Self taught UI/UX DESIGNER AND WEB DEVELOPER, with a
            passion to learn new skills and technologies.
          </p>

          <p className="text-2xl">
            I am currently studying Computer Science in Mannheim. I am actively
            learning and doing Web-Developement since 2022.
          </p>
        </div>

        <div className="">
          <p className="text-7xl">I can help buisinesses</p>
          <div className="flex items-center">
            <p className="text-7xl">Leave a lasting impression</p>
            <button className="ml-8 mt-2 px-12 border border-white text-2xl py-2 rounded-full">
              How?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
