import React from "react";

function MyCapabilities() {
  return (
    <div className="pr-24 pt-[512px]">
      <p className="text-8xl pb-16">My Capabilites</p>
      <div className="flex justify-between gap-16">
        <div className="w-full">
          <p className="text-4xl">/1/ Design</p>
          <div className="pt-4 text-xl ">
            <p className="border-b py-2">UI/UX Design</p>
            <p className="border-b py-2">Figma</p>
            <p className="border-b py-2">Wireframing</p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-4xl bg-white text-black p-4">/2/ Front-End</p>
          <div className="pt-6 text-xl ">
            <p className="border-b py-2">Javascript</p>
            <p className="border-b py-2">React</p>
            <p className="border-b py-2">CSS</p>
          </div>
        </div>
        <div className="w-full">
          <p className="text-4xl bg-white text-black p-4">/3/ Back-End</p>
          <div className="pt-6 text-xl ">
            <p className="border-b py-2">Django</p>
            <p className="border-b py-2">MongoDB</p>
            <p className="border-b py-2">NodeJs</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MyCapabilities;
