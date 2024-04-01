import React from "react";

function AboutMe() {
  const [activeButton, setActiveButton] = React.useState(null);

  const buttonContent = [
    { name: "My Story", text: "Bla Bla" },
    {
      name: "My Vision",
      text: "Beliebiger Text für Button 2 Hey, I am a self taught UI/UX designer and Web-Developer, with aHey, I am a self taught UI/UX designer and Web-Developer, with a",
    },

    {
      name: "My Impact",
      text: "Beliebiger Text für Button 3 Hey, I am a self taught UI/UX designer and Web-Developer, with a",
    },
  ];

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
  };

  return (
    <div className="pr-24">
      <div className="flex justify-between text-4xl border-b border-white pb-4">
            <div>
              <p>Design</p>
              <p>& Developement</p>
            </div>
            <div>
              <p>Innovative</p>
              <p>& New Approach</p>
            </div>
            <div>
            <p>Expirienced</p>
            <p>& Skilled</p>
            </div>
            
          </div>
      <div className="flex gap-16 pt-16">
        
        <div className="w-1/3">
          <img src="/images/images.jpg" className="h-96 w-full" alt="" />
        </div>
        <div className="w-2/3">
          
          
          <p className="text-2xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
        <div className="w-2/3 mt-16">
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
                    className={
                      "w-6 h-6 rotate-180 transition duration-500 ease-in-out"
                    }
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
                    className={
                      "w-6 h-6 rotate-270 transition duration-500 ease-in-out"
                    }
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
  );
}

export default AboutMe;
