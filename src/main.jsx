import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cover from "./Cover.jsx";
import Profile from "./Profile.jsx";
import "./index.css";
import Skills from "./Skills.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black h-full text-white pl-12 ">
    <React.StrictMode>
      <div className="relative">
        <video
          src="/videos/jupiter7.mkv"
          autoPlay
          loop
          muted
          className="h-[1700px] w-full object-cover"
        />
          <div className="absolute top-0 bottom-0">
            <Cover />
            <Profile />
          </div>
        <Skills />
        
      </div>
    </React.StrictMode>
  </div>
);
