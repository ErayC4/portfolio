import React from "react";

  
function MyCapabilities() {
  return (
    <div className="pt-48">
      <p className="text-8xl pb-16 fugazOne text-rose-500">My Capabilites</p>
      <div className="grid grid-cols-3 gap-16">
        <div>
          <p className="text-4xl fugazOne border-b pb-4">Design</p>
          <p className="text-xl py-2 border-b">UI/UX</p>
          <p className="text-xl py-2 border-b">Figma</p>
          <p className="text-xl py-2 border-b">Responsive layout</p>
          <p className="text-xl pt-4">Designing website from scratch, using UI/UX knowladge and Figma Skills</p>
          
        </div>

        <div>
          <p className="text-4xl fugazOne border-b pb-4">Front-End</p>
          <p className="text-xl py-2 border-b">HTML</p>
          <p className="text-xl py-2 border-b">CSS</p>
          <p className="text-xl py-2 border-b">React</p>
          <p className="text-xl pt-4">Implement the Design with Html CSS and making elements interactive with the help of React</p>
        </div>

        <div>
          <p className="text-4xl fugazOne border-b pb-4">Back-End</p>
          <p className="text-xl py-2 border-b">Django</p>
          <p className="text-xl py-2 border-b">MongoDB</p>
          <p className="text-xl py-2 border-b">NextJs</p>
          <p className="text-xl pt-4">If your Project needs to save and display data, then I will make it with mysql, mongodb and django possible</p>
        </div>
      </div>
      
    </div>
  );
}

export default MyCapabilities;
