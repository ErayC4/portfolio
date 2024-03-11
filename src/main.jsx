import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cover from "./Cover.jsx";
import Profile from "./Profile.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-black h-full text-white pl-12">
    <React.StrictMode>
    <div style={{ position: 'relative' }}>
  <video
    src="/videos/jupiter3.mkv"
    autoPlay
    loop
    muted
    className="h-[1700px] w-full object-cover"
  />
  <div style={{ position: 'absolute', top: 0, left: 0 }}>
    <Cover />
    <Profile />
  </div>
</div>

      
    </React.StrictMode>
  </div>
);
