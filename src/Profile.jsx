import React from "react";

function Profile() {
  const [activeButton, setActiveButton] = React.useState(null);
  const buttonContent = [
    { name: "My Story", text: "Beliebiger Text für Button 1" },
    { name: "My Vision", text: "Beliebiger Text für Button 2" },
    { name: "My Impact", text: "Beliebiger Text für Button 2" },

  ]; // Du kannst hier mehr Texte hinzufügen, um mehr buttonContent zu haben

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-1/2">
        <p className="text-8xl pb-8">About Me</p>

        <p className="text-2xl pb-4">
          Hey, I am a self taught UI/UX designer and Web-Developer, with a
          passion to learn new skills and technologies.
        </p>

        <p className="text-2xl">
          I am currently studying Computer Science in Mannheim. I am actively
          learning and doing Web-Developement since 2022.
        </p>
      </div>
      <div className="pt-8 transition-all">
        {buttonContent.map((button) => (
          <div key={button.name}>
            <button onClick={() => handleButtonClick(button.name)}>{button.name}</button>
            {activeButton === button.name && <p>{button.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
