import React from "react";
import projectsData from "./projectsData.json"; // Importiere die JSON-Datei
import { div } from "three/examples/jsm/nodes/Nodes.js";

function Projects() {
  const [activeButton, setActiveButton] = React.useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    //container für alls
    <div>
      <p className="text-rose-500 text-8xl fugazOne pb-16">PROJECTS</p>
      <div className="grid grid-cols-3 gap-24 pb-96">
      {/*Container für Latest */}
      <div className="col-span-2">
        <div className="flex justify-center items-center h-12 bg-rose-500">
          <p className="text-xl text-black">Latest</p>
        </div>
        <div className="bg-[#292929] p-8 mt-12 ">
          <img
            src="/images/websiteCovers/websiteCover1.jpg"
            className="h-96 w-full object-cover border-b-[16px] border-rose-500"
            alt=""
          />
          <div className="pt-4 pb-2 flex justify-between items-center">
            <p className="text-xl">WebsiteName</p>
            <p className="text-xl">Ecommerce</p>
            <p className="text-xl">Front-End & Back-End</p>

            <button className="">
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </button>
          </div>
          <p className="text-l text-gray-400 ">26TH March 2023 </p>
        </div>

        {/*Container für die zwei unteren container */}
        <div className="grid grid-cols-2 gap-12 pt-12">
          {/*UnterContainer1 */}
          <div className="bg-[#292929] p-8  ">
            <img
              src="/images/websiteCovers/websiteCover4.jpg"
              className="h-96 w-full object-cover border-b-[16px] border-rose-500"
              alt=""
            />
            <div className="pt-4 pb-2 flex justify-between items-center">
              <p className="text-xl">WebsiteName</p>
              <p className="text-xl">Ecommerce</p>

              <button className="">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-l text-gray-400 ">26TH March 2023 </p>
          </div>

          {/*UnterContainer 2 */}
          <div className="bg-[#292929] p-8">
            <img
              src="/images/websiteCovers/websiteCover3.jpg"
              className="h-96 w-full object-cover border-b-[16px] border-rose-500"
              alt=""
            />
            <div className="pt-4 pb-2 flex justify-between items-center">
              <p className="text-xl">WebsiteName</p>
              <p className="text-xl">Ecommerce</p>

              <button className="">
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-l text-gray-400 ">26TH March 2023 </p>
          </div>
        </div>
      </div>

      {/*Container für Most Viewed */}
      <div className="col-span-1">
        <div className="flex justify-center items-center h-12 bg-rose-500">
          <p className="text-xl text-black">Most Viewed</p>
        </div>
        {/*Container für 1. */}
        <div className="pt-12 border-b">
          <div className="flex">
            <div className="w-1/4">
              <p className="text-8xl fugazOne w-full">1.</p>
              <p className="pb-4 text-l text-gray-400">26TH March</p>
            </div>
            <div className="w-3/4">
              <img
                src="/images/websiteCovers/websiteCover4.jpg"
                className="w-full object-cover h-48 border-b-8 border-rose-500"
                alt=""
              />
              <div className="py-4 flex justify-between items-center">
                <p className="text-xl">SomeWebsite123</p>

                <button>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Container für 2. */}
        <div className="pt-12 border-b">
          <div className="flex">
            <div className="w-1/4">
              <p className="text-8xl fugazOne w-full">2.</p>
              <p className="pb-4 text-l text-gray-400">26TH March</p>
            </div>
            <div className="w-3/4">
              <img
                src="/images/websiteCovers/websiteCover5.jpg"
                className="w-full object-cover h-48 border-b-8 border-rose-500"
                alt=""
              />
              <div className="py-4 flex justify-between items-center">
                <p className="text-xl">SomeWebsite123</p>

                <button>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Container für 3. */}
        <div className="pt-12 border-b">
          <div className="flex">
            <div className="w-1/4">
              <p className="text-8xl fugazOne w-full">3.</p>
              <p className="pb-4 text-l text-gray-400">26TH March</p>
            </div>
            <div className="w-3/4">
              <img
                src="/images/websiteCovers/websiteCover6.jpg"
                className="w-full object-cover h-48 border-b-8 border-rose-500"
                alt=""
              />
              <div className="py-4 flex justify-between items-center">
                <p className="text-xl">SomeWebsite123</p>

                <button>
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Projects;
