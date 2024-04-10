import React from "react";
import ThreeFiber from "./ThreeFiber";
import AnimatedBlob from "./AnimatedBlob";

function MyCapabilities() {
  return (
    <div className="pr-24 pt-[512px]">
      <p className="text-8xl pb-16">My Capabilites</p>

      <div className="flex pb-32">
        <p className="bg-white p-4 text-4xl text-black rounded-xl">/1/</p>

        <div className="pl-8">
          <div className="flex gap-16 ">
            <div className="w-1/2 text-center">
              <p className="text-8xl border-b border-gray-400 pb-8">
                UI/UX Design
              </p>
              <p className="text-8xl border-b border-gray-400 py-8">
                Web Design
              </p>
              <p className="text-8xl py-8">Mobile Design</p>
            </div>
            <div className="w-1/2 flex justify-between items-center">
              <div className="w-2/3">
                <p className="text-xl text-center pt-4">
                  Design is at the very core of everything we do. We balance
                  form, function, and feeling to develop brands in the digital
                  space.
                </p>
                <div className="relative flex justify-center items-center pt-12 h-[256px]">
                  
                  <div className="w-full absolute inset-0 z-0 mt-12 ml-32">
                  <AnimatedBlob/>

                  </div>
                  

                  <ThreeFiber className="absolute inset-0 z-1"/>
                </div>
              </div>
              <div className="pt-[128px]">
                <p className="text-xl text-violet-400 text-center">
                  // Modern Design
                </p>
                <p className="text-xl text-violet-400 text-center">
                  // Responsive Layouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pb-32">
        <p className="bg-white p-4 text-4xl text-black rounded-xl">/1/</p>

        <div className="pl-8">
          <div className="flex gap-16 ">
            <div className="w-1/2 text-center">
              <p className="text-8xl border-b border-gray-400 pb-8">
                UI/UX Design
              </p>
              <p className="text-8xl border-b border-gray-400 py-8">
                Web Design
              </p>
              <p className="text-8xl py-8">Mobile Design</p>
            </div>
            <div className="w-1/2 flex justify-between items-center">
              <div className="pt-[128px]">
                <p className="text-xl text-violet-400 text-center">
                  // Modern Design
                </p>
                <p className="text-xl text-violet-400 text-center">
                  // Responsive Layouts
                </p>
              </div>
              <div className="w-2/3">
                <p className="text-xl text-center pt-4">
                  Design is at the very core of everything we do. We balance
                  form, function, and feeling to develop brands in the digital
                  space.
                </p>
                <div className="pt-12 h-[256px]">
                  <ThreeFiber />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pb-32">
        <p className="bg-white p-4 text-4xl text-black rounded-xl">/1/</p>

        <div className="pl-8">
          <div className="flex gap-16 ">
            <div className="w-1/2 text-center">
              <p className="text-8xl border-b border-gray-400 pb-8">
                UI/UX Design
              </p>
              <p className="text-8xl border-b border-gray-400 py-8">
                Web Design
              </p>
              <p className="text-8xl py-8">Mobile Design</p>
            </div>
            <div className="w-1/2 flex justify-between items-center">
              <div className="w-2/3">
                <p className="text-xl text-center pt-4">
                  Design is at the very core of everything we do. We balance
                  form, function, and feeling to develop brands in the digital
                  space.
                </p>
                <div className="pt-12 h-[256px]">
                  <ThreeFiber />
                </div>
              </div>
              <div className="pt-[128px]">
                <p className="text-xl text-violet-400 text-center">
                  // Modern Design
                </p>
                <p className="text-xl text-violet-400 text-center">
                  // Responsive Layouts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCapabilities;
