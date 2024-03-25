import React from "react";

function ContactMe() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center">
        <p className="text-8xl">LET’S BUILD</p>
        <p className="text-8xl">AMAZING THINGS</p>
        <p className="text-8xl">TOGETHER</p>
        <div className="w-2/3 flex gap-8 mt-16">
          <div className="w-1/2 text-lg">
            <p>
              I AM OPEN TO TALK TO GOOD PEOPLE. JUST SAY HELLO AND I’LL START A
              PRODUCTIVE COOPERATION.
            </p>

            <p className="pt-4">MY EMAIL: Eray04.coskun@gmail.com</p>
          </div>
          <div className="w-1/2 flex flex-col">
            <input type="text" placeholder="Name" className="bg-transparent text-white text-lg border-b py-4" />
            <input type="text" placeholder="Name" className="bg-transparent text-white text-lg border-b py-4" />
            <input type="text" placeholder="Name" className="bg-transparent text-white text-lg border-b py-4" />

            <button className="border py-4 text-lg mt-8">
              SEND IT!
            </button>
          </div>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
}

export default ContactMe;
