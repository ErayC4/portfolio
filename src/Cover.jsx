import React from "react";

function Cover() {
  return (
    <div className="h-screen mt-8 flex flex-col justify-center w-[70%]">
      <p className="text-8xl ">Reach for stars &</p>
      <p className="text-8xl">Develop future</p>
      <p className="w-1/2 text-2xl pt-8 ">
        Freelance designer and developer, specialized in creating custom
        websites that captivate
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
