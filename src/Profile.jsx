import React from "react";

function Profile() {
  const [activeButton, setActiveButton] = React.useState(null);

  const buttonContent = [
    { name: "BlaBla", text: (<div className="bg-red-600">hi</div>) },
    { name: "My Vision", text: "Beliebiger Text für Button 2" },
    { name: "My Impact", text: "Beliebiger Text für Button 3" },
  ];


  const handleButtonClick = (name) => {
    setActiveButton(activeButton === name ? null : name);
  };
  

  return (
    <div className="h-screen flex flex-col pt-40">
      <div className="w-1/2">
        <p className="text-8xl pb-8">About Me</p>

        <p className="text-2xl pb-4">
          Hey, I am a self taught UI/UX designer and Web-Developer, with a
          passion to learn new skills and technologies.
        </p>

        <div className="pt-8">
          {buttonContent.map((button) => (
            <div key={button.name}>
              <div className="flex items-center border-t-2">
                <button
                  onClick={() => handleButtonClick(button.name)}
                  className="w-full py-4 flex items-start"
                >
                  <p className="text-2xl">{button.name}</p>
                </button>
                <div className="">
                  {activeButton === button.name ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className={`w-6 h-6 ${
                        activeButton === button.name && "rotate-180 transition duration-500 ease-in-out"

                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className={`w-6 h-6 ${
                        activeButton === button.name
                          ? "rotate-90 transition duration-500 ease-in-out"
                          : "transition duration-500 ease-in-out"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: activeButton === button.name ? "500px" : "0",
                  opacity: activeButton === button.name ? 1 : 0,
                }}
              >
                <div className="text-lg pb-4">{button.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
