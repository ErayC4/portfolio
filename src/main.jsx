import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Cover from "./Cover.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import ContactMe from "./ContactMe.jsx";
import MyCapabilities from "./MyCapabilities.jsx";
import ThreeFiber from "./ThreeFiber.jsx";
import AnimatedBlob from "./AnimatedBlob.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#1A1A1A] h-full text-white px-[10%]">
    <React.StrictMode>
      <Cover />
      <Projects />
      <AboutMe />
      <MyCapabilities />
      <ContactMe />
      <AnimatedBlob />
    </React.StrictMode>
  </div>
);
