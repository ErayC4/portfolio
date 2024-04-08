import React from "react";
import ThreeFiber from "./ThreeFiber";

function MyCapabilities() {
  return (
    <div className="pr-24 pt-[512px]">
      <p className="text-8xl pb-16">My Capabilites</p>
      <div className="flex pb-32 pt-8 border-t border-gray-400">
        <p className="bg-white p-4 text-4xl text-black rounded-xl">/1/</p>

        <div className="pl-8">
          

          <div className="flex gap-16 ">
            <div className="w-1/3">
              <p className="text-xl text-center pt-4">
                Design is at the very core of everything we do. We balance form,
                function, and feeling to develop brands in the digital space.
              </p>
              <div className="pt-12 h-[300px]">
                <ThreeFiber />
              </div>
            </div>

            <div className="w-2/3 text-center">
              <p className="text-8xl border-b border-gray-400 pb-8">
                UI/UX Design
              </p>
              <p className="text-8xl border-b border-gray-400 py-8">Web Design</p>
              <p className="text-8xl py-8">
                Mobile Design
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="flex pb-32 pt-8 border-t border-gray-400">
        <p className="bg-white p-4 text-4xl text-black rounded-xl">/2/</p>

        <div className="pt-4 pl-8">

          <div className="flex gap-16">
            <div className="w-1/3 pt-4">
              <p className="text-xl text-center">
                Design is at the very core of everything we do. We balance form,
                function, and feeling to develop brands in the digital space.
              </p>
              <div className="pt-12 h-[300px]">
                <ThreeFiber />
              </div>
            </div>

            <div className="w-2/3 text-center">
              <p className="text-8xl border-b border-gray-400 pb-8">
                UI/UX Design
              </p>
              <p className="text-8xl border-b border-gray-400 py-8">Web Design</p>
              <p className="text-8xl py-8">
                Mobile Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCapabilities;
