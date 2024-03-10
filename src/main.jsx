import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cover from "./Cover.jsx";
import Profile from "./Profile.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black h-full text-white pl-12">
    <React.StrictMode>
      <div>
        <video
          src="/videos/jupiter1.mkv"
          autoPlay
          loop
          muted
          className="h-full w-screen object-cover"
        />
      </div>
      <Cover />
      <Profile />
    </React.StrictMode>
  </div>
);
