import React from "react";

function Profile() {
  const [activeButton, setActiveButton] = React.useState(null);
  const buttonContent = [
    { name: "My Story", text: "Beliebiger Text für Button 1" },
    { name: "My Vision", text: "Beliebiger Text für Button 2" },
    { name: "My Impact", text: "Beliebiger Text für Button 3" },
  ];

  const handleButtonClick = (name) => {
    setActiveButton(activeButton === name ? null : name);
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
          learning and doing Web-Development since 2022.
        </p>

        <div className="pt-8">
          {buttonContent.map((button) => (
            <div key={button.name}>
              <button
                onClick={() => handleButtonClick(button.name)}
                className="transition-all duration-300 border-t-2 w-full pt-4 pb-4 items-start"
              >
                <p className="text-2xl">{button.name}</p>
              </button>
              <div
                className={`${
                  activeButton === button.name
                    ? "opacity-100 transition-opacity duration-500 ease-in-out"
                    : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                <p>{button.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
