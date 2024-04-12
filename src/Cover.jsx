import React from "react";

function Cover() {
  return (
    <div className="pt-32 pb-64">

      <p className="text-8xl pt-8 pb-8">Frontend Developer</p>
      
      <p className="w-1/2 text-2xl">
        Freelance designer and developer, specialized in creating custom
        websites that captivates people
      </p>
      <div className="flex">
        <button className="text-lg border-2 border-white mt-8 py-2 px-12 hover:bg-white hover:text-black transition ease-in duration-200">
          Learn more
        </button>
      </div>

    </div>
  );
}

export default Cover;
