import React from "react";

function MyCapabilities() {
  return (
    <div className="pr-24 pt-[512px]">
      <p className="text-8xl pb-16">My Capabilites</p>
      <div className="flex pb-32">
        <p className="bg-white p-4 text-4xl text-black rounded-xl">/1/</p>

        <div className="pt-4 pl-8">
          <p className="text-4xl pb-4 border-b border-white">Design</p>

          <div className="flex gap-8 pt-8">
            <p className="text-xl w-1/3">
              Design is at the very core of everything we do. We balance form,
              function, and feeling to develop brands in the digital space.
            </p>
            <div className="w-2/3">
              <p className="text-8xl border-b border-white pb-8">
                UI/UX Design
              </p>
              <p className="text-8xl border-b border-white py-8">Web Design</p>
              <p className="text-8xl border-b border-white py-8">
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
