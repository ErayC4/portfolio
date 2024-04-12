import React from "react";

function MyCapabilities() {
  return (
    <div className="pr-24 pt-[512px]">
      <p className="text-8xl pb-8 mb-12 border-b border-white">My Capabilites</p>
      <div className="flex justify-between">
        <div className="w-1/4">
          <p className="text-4xl bg-white text-black p-4">/1/ Design</p>
          <div className="p-4 text-xl border-b border-x border-white">
            <p>UI/UX Design</p>
            <p>Figma</p>
            <p>Wireframing</p>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-4xl bg-white text-black p-4">/2/ Front-End</p>
          <div className="p-4 text-xl border-b border-x border-white">
            <p>Javascript</p>
            <p>React</p>
            <p>CSS</p>
          </div>
        </div>
        <div className="w-1/4">
          <p className="text-4xl bg-white text-black p-4">/3/ Back-End</p>
          <div className="p-4 text-xl border-b border-x border-white">
            <p>Django</p>
            <p>MongoDB</p>
            <p>NodeJs</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MyCapabilities;
