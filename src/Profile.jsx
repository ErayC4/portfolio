import React from "react";

function Profile() {
  const [activeButton, setActiveButton] = React.useState(null);

  const buttonContent = [
    { name: "My Story", text: "Bla Bla" },
    { name: "My Vision", text: "Beliebiger Text für Button 2 Hey, I am a self taught UI/UX designer and Web-Developer, with aHey, I am a self taught UI/UX designer and Web-Developer, with a" },
    { name: "My Skills", text: "Beliebiger Text für Button 3 Hey, I am a self taught UI/UX designer and Web-Developer, with a Hey, I am a self taught UI/UX designer and Web-Developer, with aHey, I am a self taught UI/UX designer and Web-Developer, with a" },
    { name: "My Impact", text: "Beliebiger Text für Button 3 Hey, I am a self taught UI/UX designer and Web-Developer, with a" },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };

  return (
    <div className="h-screen flex pt-40 gap-32">
      <div className="w-1/2">
        <p className="text-8xl pb-8">About Me</p>

        <p className="text-2xl pb-4">
          Hey, I am a self taught UI/UX designer and Web-Developer, with a
          passion to learn new skills and technologies.
        </p>

        <div className="pt-8">
          {buttonContent.map((button) => (
            <div key={button.name}>
              <button
                className="flex justify-between items-center border-t-2 w-full py-8"
                onClick={() => handleButtonClick(button.name)}
              >
                <button className="flex items-start">
                  <p className="text-2xl">{button.name}</p>
                </button>
                {activeButton === button.name ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className={"w-6 h-6 rotate-180 transition duration-500 ease-in-out"}
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
                    className={"w-6 h-6 rotate-270 transition duration-500 ease-in-out"}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                )}
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: activeButton === button.name ? "512px" : "0",
                  opacity: activeButton === button.name ? 1 : 0,
                }}
              >
                <div className="text-lg pb-4 w-3/4">{button.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-center border border-white">
        <div className="p-16 ">
        <img src="/images/images.jpg" className="h-96 border border-white" alt="" />
        <p className="text-2xl">Eray Coskun</p>
        </div>

      </div>
    </div>
  );
}

export default Profile;
