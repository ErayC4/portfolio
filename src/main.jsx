import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Cover from "./Cover.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import ContactMe from "./ContactMe.jsx";
import MyCapabilities from "./MyCapabilities.jsx";
import ThreeFiber from "./ThreeFiber.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black h-full text-white pl-24 ">
    <React.StrictMode>
      <video
        src="/videos/jupiter7.mkv"
        autoPlay
        loop
        muted
        className="h-[1700px] w-full object-cover"
      />
      <div className="absolute top-0 bottom-0 pr-24">
        <Cover />
        <Projects />
      </div>
      <div className="h-[512px]"></div>
      <AboutMe />
      <MyCapabilities />
      <ContactMe />
    </React.StrictMode>
  </div>
);
