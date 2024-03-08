import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="text-white h-full flex items-center">
    <div className="pl-12">
        <div className="text-7xl pb-8">
            <p>Reach for the stars</p>
            <p>& Develop the future</p>
        </div>
        <button className="px-12 border border-white text-lg py-2 rounded-full">Learn More</button>
    </div>
    <img src="/images/jupiter.jpg" className='inset-0 mt-96 object-cover' alt="" />
</div>

  );
}

export default App;
