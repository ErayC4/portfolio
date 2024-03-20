import React from "react";
import ReactDOM from "react-dom/client";
import Cover from "./Cover.jsx";
import Profile from "./Profile.jsx";
import "./index.css";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import ContactMe from "./ContactMe.jsx";

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
        <Profile />
      </div>
      <Skills />
      <Projects />
      <ContactMe />
    </React.StrictMode>
  </div>
);
